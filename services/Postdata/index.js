import axios from "axios"
export const createdata = ({ data }) => {
  return axios.post("/query ", { ...data });
};
