import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    onLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { onLoading } = loaderSlice.actions;

export const selectCount = (state: RootState) => state.loader.loading;

export default loaderSlice.reducer;
