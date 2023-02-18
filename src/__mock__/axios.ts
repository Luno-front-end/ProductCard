import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import products from "../services/products";

const mock = new MockAdapter(axios);

mock.onGet(/products\/?(.*)/).reply(async (config) => {
  const url = config.url;
  const queryParam = parseQueryString(url!);

  if (!queryParam) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const updatedQueryParam = parseQueryString(config.url!);

    return [200, updatedQueryParam];
  }

  const getProductByQuery = queryProducts(queryParam);

  return [200, getProductByQuery];
});

const queryProducts = (obj: any) => {
  let newProducts: any[] = [];

  const onSearch = obj.searchProd
    ? products.products.filter(({ title }) =>
        title.toLowerCase().includes(obj.searchProd.toLowerCase())
      )
    : products.products;
  if (obj.skip > onSearch.length) {
    return { products: [] };
  }
  if (obj.searchProd) {
    newProducts = products.products.filter(({ title }) =>
      title.toLowerCase().includes(obj.searchProd.toLowerCase())
    );

    newProducts = newProducts.slice(
      parseInt(obj.skip),
      parseInt(obj.limit) + parseInt(obj.skip)
    );

    return { products: newProducts };
  }
  newProducts = products.products.slice(
    parseInt(obj.skip),
    parseInt(obj.limit) + parseInt(obj.skip)
  );

  return { products: newProducts };
};

const parseQueryString = (url: string) => {
  const queryString = url.replace(/.*\?/, "");

  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);

  const result: Record<string, unknown> = {};

  urlParams.forEach((val: string, key: string) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
};

export default axios;
