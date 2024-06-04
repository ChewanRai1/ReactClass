import axios from "axios";

//creating an instant of axios
const Api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//creating test api
export const testApi = () => Api.get("/test");

export const testApinew = () => Api.get("/test_new");

//creating register API
export const registerUSerApi = (data) => Api.post("/api/user/create", data);

//creating login api
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// create product  create api
export const createproductApi = (data) => Api.post("api/product/create", data);

export const getAllProducts = () => Api.get("/api/product/get_all_products");
//http://localhost:8000/test
