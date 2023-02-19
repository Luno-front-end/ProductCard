import { AxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { onLoading } from "../Redux/slices/loader";
import { onNotify, setStatusCodeAndMessage } from "../Redux/slices/notify";
import { clearPage, onSearch } from "../Redux/slices/page";
import { clearProducts, getNewProducts } from "../Redux/slices/products";
import Api from "../services/FetchAPI";
import { useNewProucts } from "./useNewProucts";

export const useSearchBar = () => {
  const [idTimeout, setIdTimeout] = useState<number>();

  const { getProductComponent } = useNewProucts();

  const dispatch = useDispatch();

  const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    clearTimeout(idTimeout);

    dispatch(onSearch(val.trim()));
    const idTimer = setTimeout(async () => {
      if (val.length > 3) {
        dispatch(onLoading(true));
        dispatch(clearProducts());
        const response = await Api.getProductsSearch(0, val)
          .finally(() => dispatch(onLoading(false)))
          .catch((err: AxiosError) => {
            dispatch(onNotify(true));

            dispatch(
              setStatusCodeAndMessage({
                status: Number(err.response?.status),
                erorrMessage: err.response?.statusText,
              })
            );
          });

        dispatch(getNewProducts(response));
        return;
      }

      if (val === "") {
        dispatch(clearPage());
        dispatch(clearProducts());
        await getProductComponent(val, 0);
      }
    }, 1000);

    setIdTimeout(Number(idTimer));
  };

  return { handleChenge };
};
