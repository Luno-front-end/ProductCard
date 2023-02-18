import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface PageState {
  skip: number;
  value: string;
}

const initialState: PageState = {
  skip: 0,
  value: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.skip += action.payload;
    },
    clearPage: (state) => {
      state.skip = 0;
    },
    onSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage, onSearch, clearPage } = pageSlice.actions;

export const selectCount = (state: RootState) => state.page.skip;

export default pageSlice.reducer;
