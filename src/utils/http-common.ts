import axios from "axios";

export default axios.create({
  baseURL: "http://schoolapp.aaditechnology.com/MobileService.svc/",
  headers: {
    "Content-type": "application/json"
  }
});