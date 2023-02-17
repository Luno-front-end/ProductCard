import axios, { AxiosResponse } from "axios";

import { IProduct } from "../types/types";

const BASE_URL = "https://dummyjson.com/products/";
const getProducts = async (numberSkip?: number) => {
  const response = await axios
    .get<IProduct>(`${BASE_URL}?limit=20&skip=${numberSkip}`)
    .then((r: AxiosResponse) => r.data.products);

  return response;
};
const getProductsSearch = async (numberSkip?: number, values?: string) => {
  if (values === undefined) return;
  const response = await axios
    .get<IProduct>(`${BASE_URL}/search?limit=20&skip=${numberSkip}&q=${values}`)
    .then((r: AxiosResponse) => r.data.products);

  return response;
};

const getProductsById = async (id?: number) => {
  const response = await axios
    .get<IProduct>(`${BASE_URL}/${id}`)
    .then((r: AxiosResponse) => r.data);

  return response;
};

const api = {
  getProducts,
  getProductsById,
  getProductsSearch,
};

export default api;
