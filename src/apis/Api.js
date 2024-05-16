import axios from "axios";

//creating an instant of axios
const Api = axios.create({
    baseURL : "http://localhost:8000",
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
});

//creating test api
export const testApi =()=> Api.get('/test')

export const testApinew =()=> Api.get('/test_new')

//creating register API
export const registerUSerApi = (data) => Api.post('/api/user/create', data)

//creating register api
export const loginUserApi = (data) => Api.post('/api/user/login', data)
//http://localhost:8000/test