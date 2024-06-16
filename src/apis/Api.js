import axios from "axios";

//creating an instant of axios
const Api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//creating authorization config
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

//creating test api
export const testApi = () => Api.get("/test");

export const testApinew = () => Api.get("/test_new");

//creating register API
export const registerUSerApi = (data) => Api.post("/api/user/create", data);

//creating login api
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// create product  create api
export const createproductApi = (data) => Api.post("api/product/create", data);

//fetcha all products
export const getAllProducts = () =>
  Api.get("/api/product/get_all_products", config);

//fetch single product
// export const getSingleProduct = (id) =>
// Api.get("api/product/get_single_product/" + id);

export const getSingleProduct = (id) =>
  Api.get(`/api/product/get_single_product/${id}`, config);

//delete
export const deleteProduct = (id) =>
  Api.delete(`/api/product/delete_product/${id}`);

//update
export const updateProduct = (id, data) =>
  Api.put(`/api/product/update_product/${id}`, data, config);
//http://localhost:8000/test
