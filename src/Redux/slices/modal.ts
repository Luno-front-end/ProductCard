import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ModalState {
  isOpenModal: boolean;
}

const initialState: ModalState = {
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    onOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
  },
});

export const { onOpenModal } = modalSlice.actions;

export const selectCount = (state: RootState) => state.modal.isOpenModal;

export default modalSlice.reducer;
