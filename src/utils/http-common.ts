import axios from "axios";

export default axios.create({
 // baseURL: "http://schoolappapi.aaditechnology.com",
  baseURL: "http://192.168.1.59:8080/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});