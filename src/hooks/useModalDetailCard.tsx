import { AxiosError } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onNotify, setStatusCodeAndMessage } from "../Redux/slices/notify";
import { getOneProduct } from "../Redux/slices/products";
import api from "../services/FetchAPI";

export const useModalDetailCard = () => {
  const dispatch = useDispatch();
  const [activeModal, setActivModal] = useState<boolean>(false);
  const handleClick = async (id?: number) => {
    setActivModal(!activeModal);

    if (!id) return dispatch(getOneProduct([]));

    const getOne = await api.getProductsById(id).catch((err: AxiosError) => {
      dispatch(onNotify(true));
      dispatch(
        setStatusCodeAndMessage({
          status: Number(err.response?.status),
          erorrMessage: err.message,
        })
      );
    });

    dispatch(getOneProduct([getOne]));
  };
  return { handleClick, activeModal };
};
