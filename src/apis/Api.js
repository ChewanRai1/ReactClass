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

//http://localhost:8000/test

export const testApinew =()=> Api.get('/test_new')