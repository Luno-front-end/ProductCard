import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "react-toastify/dist/ReactToastify.css";

import { ProductsList } from "./components/ProductsList/ProductsList";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/store";

import { onfetch } from "./Redux/slices/products";
import { Loader } from "./components/Loader/Loader";
import { ModalDetails } from "./components/ModalDetails/ModalDetails";
import { useModalDetailCard } from "./hooks/useModalDetailCard";
import { useNewProucts } from "./hooks/useNewProucts";
import { Notify } from "./Notify/Notify";

const App: FC = () => {
  const loading = useSelector((state: RootState) => state.loader);
  const page = useSelector((state: RootState) => state.page);

  const productsState = useSelector(
    (state: RootState) => state.products.products
  );
  const fetching = useSelector((state: RootState) => state.products.fetching);
  const onErorr = useSelector((state: RootState) => state.notify);

  const { getProductComponent } = useNewProucts();
  const { handleClick } = useModalDetailCard();

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("scroll", scrollHenler);
    return () => {
      document.removeEventListener("scroll", scrollHenler);
    };
  }, []);

  useEffect(() => {
    if (fetching) getProductComponent(page.value, page.skip);
  }, [fetching]);

  const scrollHenler = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
      dispatch(onfetch(true));
    }
  };
  return (
    <>
      {onErorr.activeNotify && <Notify />}
      <Header getProduct={getProductComponent} />
      <Container className={"container"}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsList
                products={productsState}
                handleClick={handleClick}
              />
            }
          />
        </Routes>

        {loading && <Loader />}
        <ModalDetails handleClick={handleClick} />
      </Container>
    </>
  );
};

export default App;
