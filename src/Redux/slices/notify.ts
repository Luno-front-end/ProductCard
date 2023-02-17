import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NotifyState {
  activeNotify: boolean;
  status: number | null;
  erorrMessage: string;
}

const initialState: NotifyState = {
  activeNotify: false,
  status: null,
  erorrMessage: "",
};

const notifySlice = createSlice({
  name: "notify",
  initialState: initialState,
  reducers: {
    onNotify: (state, action: PayloadAction<boolean>) => {
      state.activeNotify = action.payload;

      setTimeout(() => {
        state.activeNotify = false;
      }, 1000);
    },
    setStatusCodeAndMessage: (state, action: PayloadAction<any>) => {
      state.status = action.payload.status;
      state.erorrMessage = action.payload.erorrMessage;
    },
  },
});

export const { onNotify, setStatusCodeAndMessage } = notifySlice.actions;

export const selectCount = (state: RootState) => state.notify.activeNotify;

export default notifySlice.reducer;
