import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModal } from "../Redux/slices/modal";
import { getOneProduct } from "../Redux/slices/products";
import { RootState } from "../Redux/store";

export const useModalDetailCard = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleClick = (id?: number) => {
    if (products.product.length !== 0) dispatch(getOneProduct([]));
    const getOne = products.products.filter((product) => product.id === id);

    dispatch(getOneProduct(getOne));
    dispatch(onOpenModal(true));
  };
  return { handleClick };
};
