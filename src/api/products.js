import axios from "axios";
import qs from "qs";

export const getProducts = (params) =>
  axios.get(`http://localhost:8001/api/products?${qs.stringify(params)}`);
