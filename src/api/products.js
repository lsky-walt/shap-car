import axios from "axios";
import { handleData } from "@/util";

export const getProducts = (params) =>
  new Promise((resolve, reject) => {
    axios.get(`/data.json`).then((res) => {
      const { size, orderBy } = params;
      setTimeout(() => {
        resolve({
          data: handleData(res.data.data, size, orderBy),
        });
      }, 500);
    });
  });
