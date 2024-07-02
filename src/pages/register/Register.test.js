import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Register from "./Register";
import { toast } from "react-toastify";
import { registerUSerApi } from "../../apis/Api";

// Mock the API.JS file
jest.mock("../../apis/Api");

// List of test cases
describe("Register Component", () => {
  // Clearing all mock test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test 1
  it("Should display success toast message on successful registration", async () => {
    // rendering register page/components
    render(<Register />);

    // First, we have to make mock response
    const mockResponse = {
      data: {
        success: true,
        message: "User Created successfully",
      },
    };

    // Config mock response
    registerUSerApi.mockResolvedValue(mockResponse);

    // Config toast.success
    toast.success = jest.fn();

    // Finding inputs and button from screen
    const firstName = await screen.findByPlaceholderText("Enter your fistname");
    const lastName = await screen.findByPlaceholderText("Enter your lastname");
    const email = await screen.findByPlaceholderText(
      "Enter your Email Address"
    );
    const phone = await screen.findByPlaceholderText("Enter your Phone number");
    const password = await screen.findByPlaceholderText("Enter your password");
    const confirmPassword = await screen.findByPlaceholderText(
      "Enter your confirm password"
    );
    const registerBtn = screen.getByText("Create Account");

    // Simulating, Filling input logically
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "johndoe@gmail.com" } });
    fireEvent.change(phone, { target: { value: "1234567890" } });
    fireEvent.change(password, { target: { value: "password123" } });
    fireEvent.change(confirmPassword, { target: { value: "password123" } });
    fireEvent.click(registerBtn);

    // We have finished the process above

    // Next is, Ensuring all above test are working fine!
    await waitFor(() => {
      // Expect api call with data, we entered/change
      expect(registerUSerApi).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "password123",
        phone: "1234567890",
      });

      // Check success.toast is called or not
      expect(toast.success).toHaveBeenCalledWith("User Created successfully");
    });
  });

  // // Test 2
  // it("Should display error toast message on registration fail", async () => {
  //   // rendering register page/components
  //   render(<Register />);

  //   // First, we have to make mock response
  //   const mockResponse = {
  //     data: {
  //       success: false,
  //       message: "Registration failed!",
  //     },
  //   };

  //   // Config mock response
  //   registerUSerApi.mockResolvedValue(mockResponse);

  //   // Config toast.error
  //   toast.error = jest.fn();

  //   // Finding inputs and button from screen
  //   const firstName = await screen.findByPlaceholderText("Enter your fistname");
  //   const lastName = await screen.findByPlaceholderText("Enter your lastname");
  //   const email = await screen.findByPlaceholderText(
  //     "Enter your Email Address"
  //   );
  //   const phone = await screen.findByPlaceholderText("Enter your Phone number");
  //   const password = await screen.findByPlaceholderText("Enter your password");
  //   const confirmPassword = await screen.findByPlaceholderText(
  //     "Enter your confirm password"
  //   );
  //   const registerBtn = screen.getByText("Create Account");

  //   // Simulating, Filling input logically
  //   fireEvent.change(firstName, { target: { value: "John" } });
  //   fireEvent.change(lastName, { target: { value: "Doe" } });
  //   fireEvent.change(email, { target: { value: "johndoe@gmail.com" } });
  //   fireEvent.change(phone, { target: { value: "1234567890" } });
  //   fireEvent.change(password, { target: { value: "password123" } });
  //   fireEvent.change(confirmPassword, { target: { value: "password123" } });
  //   fireEvent.click(registerBtn);

  //   // We have finished the process above

  //   // Next is, Ensuring all above test are working fine!
  //   await waitFor(() => {
  //     // Expect api call with data, we entered/change
  //     expect(registerUSerApi).toHaveBeenCalledWith({
  //       firstName: "John",
  //       lastName: "Doe",
  //       email: "johndoe@gmail.com",
  //       password: "password123",
  //       phone: "1234567890",
  //     });

  //     // Check error.toast is called or not
  //     expect(toast.error).toHaveBeenCalledWith("Registration failed!");
  //   });
  // });

  // Additional tests for validation errors can be added similarly.
});
