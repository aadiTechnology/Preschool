import axios from "axios";

export default axios.create({
  baseURL: "http://schoolappapi.aaditechnology.com",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});