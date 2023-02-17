import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";
import type { RootState } from "../store";

interface ProductsState {
  products: IProduct[] | [];
  product: IProduct[];
  fetching: boolean;
}

const initialState: ProductsState = {
  products: [],
  product: [],
  fetching: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getNewProducts: (state, action: PayloadAction<IProduct[] | []>) => {
      state.products = [...state.products, ...action.payload];
    },
    getOneProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = [...action.payload];
    },
    clearProducts: (state) => {
      state.products = [];
    },
    onfetch: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { getNewProducts, clearProducts, getOneProduct, onfetch } =
  productsSlice.actions;

export const selectCount = (state: RootState) => state.products.products;

export default productsSlice.reducer;
