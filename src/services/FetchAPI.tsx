import { AxiosResponse } from "axios";
import axiosMock from "../__mock__/axios";

import { IProduct } from "../types/types";

const BASE_URL = "/products";

const getProducts = async (numberSkip?: number) => {
  const response = await axiosMock
    .get<IProduct>(`${BASE_URL}?limit=20&skip=${numberSkip}`)
    .then((r: AxiosResponse) => r.data.products);
  return response;
};

const getProductsSearch = async (numberSkip?: number, values?: string) => {
  if (values === undefined) return;
  const response = await axiosMock
    .get<IProduct>(
      `${BASE_URL}?searchProd=${values}&limit=20&skip=${numberSkip}`
    )
    .then((r: AxiosResponse) => r.data.products);

  return response;
};

const api = {
  getProducts,
  getProductsSearch,
};

export default api;
