import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../Redux/slices/products";
import { RootState } from "../Redux/store";

export const useModalDetailCard = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const [activeModal, setActivModal] = useState<boolean>(false);
  const handleClick = async (id?: number) => {
    setActivModal(!activeModal);

    if (!id) return dispatch(getOneProduct([]));
    const getOne = products.filter((product) => product.id === id);

    dispatch(getOneProduct(getOne));
  };
  return { handleClick, activeModal };
};
