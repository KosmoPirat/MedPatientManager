import axios from "axios";

export const axRequest = axios.create({
  withCredentials: true,
})
