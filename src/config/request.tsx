import axios from "axios";
const APIURL = "https://api.github.com";

export const routes = {
  user: `/users`,
};

export const instance = axios.create({
  baseURL: APIURL,
});
