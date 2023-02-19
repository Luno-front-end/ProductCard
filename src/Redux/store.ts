import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import paginationReducer from "./slices/page";
import productsReducer from "./slices/products";
import loaderReducer from "./slices/loader";
import notifyReducer from "./slices/notify";
import modalReducer from "./slices/modal";

const customMidleware = getDefaultMiddleware({ serializableCheck: false });

export const store = configureStore({
  reducer: {
    page: paginationReducer,
    products: productsReducer,
    loader: loaderReducer,
    notify: notifyReducer,
    modal: modalReducer,
  },
  middleware: customMidleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
