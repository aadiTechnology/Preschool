import axios from "axios";

export default axios.create({
 //baseURL: "http://smartkidzwakad.aaditechnology.com:8081",
  //  baseURL: "http://localhost:50291/",
  baseURL: "http://api.smartkidzwakad.com/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});