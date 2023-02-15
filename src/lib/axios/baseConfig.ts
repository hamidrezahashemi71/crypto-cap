import axios from "axios";

const axiosClient = axios.create({ baseURL: process.env.REACT_APP_SERVER });

const getRequest = async (url: string) => await ( await axiosClient.get(url,{})).data

export { getRequest }