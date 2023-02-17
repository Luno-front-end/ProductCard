import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onLoading } from "../Redux/slices/loader";
import { onNotify, setStatusCodeAndMessage } from "../Redux/slices/notify";
import { setPage } from "../Redux/slices/page";
import { onfetch, getNewProducts } from "../Redux/slices/products";
import { RootState } from "../Redux/store";
import Api from "../services/FetchAPI";

export const useNewProucts = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const getProductComponent = async (val?: string, skip?: number) => {
    dispatch(onLoading(true));
    const productsState = await Api.getProducts(skip)
      .finally(() => dispatch(onLoading(false)))
      .catch((err: AxiosError) => {
        dispatch(onNotify(true));
        dispatch(
          setStatusCodeAndMessage({
            status: Number(err.response?.status),
            erorrMessage: err.message,
          })
        );
      });

    if ((productsState.length !== 0 && val === "") || val === undefined) {
      dispatch(setPage(20));

      dispatch(onfetch(false));

      return;
    }

    if (products.length === 0) {
      dispatch(setPage(0));

      dispatch(getNewProducts(productsState));

      dispatch(onfetch(false));

      return;
    }
  };

  return { getProductComponent };
};
