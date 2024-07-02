import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import "@testing-library/jest-dom";
import productMock from "../../__mock__/productMock";
import { getAllProducts } from "../../apis/Api";

// Mock the API.JS file, Not Sending to real backend
jest.mock("../../apis/Api");

// Test case
describe("Homepage Components", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("All Products should be in homepage", async () => {
    // Mock response : List of products
    const mock_data = productMock;

    // resolve api response
    getAllProducts.mockResolvedValue({ data: { products: mock_data } });

    // render homepage components
    render(<Homepage />);

    // All work done
    // Time to test
    waitFor(() => {
      mock_data.forEach((product) => {
        expect(screen.getByText(product.productName)).toBeInTheDoc();
      });
    });
  });
});
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import Homepage from "./Homepage";
// import "@testing-library/jest-dom";
// import productMock from "../../__mock__/productMock";
// import { getAllProducts } from "../../apis/Api";

// // Mock the API.JS file
// jest.mock("../../apis/Api");

// //Test case
// describe("Homepage Components", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   it("All Products should be in homepage", async () => {
//     //Mock response: List of Products
//     const mock_data = productMock;
//     // {
//     //   data: {
//     //     success: false,
//     //     message: "Product Fetched",
//     //     products: [{ Product1 }, { Product2 }],
//     //   },
//     // };

//     //resolve api response
//     getAllProducts.mockResolvedValue({ data: { products: mock_data } });

//     //render homepage components
//     render(<Homepage />);

//     //All work done
//     // Time to test
//     waitFor(() => {
//       mock_data.forEach((product) => {
//         expect(screen.getByText(product.productName)).toBeInTheDocument();

//         // expect(screen.getByText(product.createAt)).toBeInTheDocument();
//       });
//     });
//   });
// });
