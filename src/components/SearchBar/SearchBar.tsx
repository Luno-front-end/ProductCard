import { AxiosError } from "axios";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNewProucts } from "../../hooks/useNewProucts";
import { onLoading } from "../../Redux/slices/loader";
import { onNotify, setStatusCodeAndMessage } from "../../Redux/slices/notify";
import { clearPage, onSearch } from "../../Redux/slices/page";
import { clearProducts, getNewProducts } from "../../Redux/slices/products";
import { RootState } from "../../Redux/store";
import Api from "../../services/FetchAPI";

import "./searchBar.scss";

export const SearchBar: FC = () => {
  const [idTimeout, setIdTimeout] = useState<number>();
  const page = useSelector((state: RootState) => state.page);

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

  return (
    <input
      type="text"
      value={page.value}
      placeholder="пошук"
      className="search-input"
      onChange={(e) => handleChenge(e)}
    />
  );
};
