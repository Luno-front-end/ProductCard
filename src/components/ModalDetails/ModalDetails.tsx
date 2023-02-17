import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import "./modalDetails.scss";

interface ModalDetailsProps {
  handleClick: () => void;
}

export const ModalDetails: FC<ModalDetailsProps> = ({ handleClick }) => {
  const product = useSelector((state: RootState) => state.products.product);

  return (
    <div
      className="backddrop"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="modal-container">
        <div>
          <div className="wrapper-header">
            <h1 className="header-modal">{product[0]?.title}</h1>
            <img className="img-modal" src={product[0]?.thumbnail} alt="" />
          </div>
          <div className="wrapper-descrip">
            <p className="desckrip-modal">
              Description: {product[0]?.description}
            </p>
          </div>
          <div className="wrapper-price">
            <p className="price-modal">Price: {product[0]?.price}$</p>
            <p className="raing-modal">Rating: {product[0]?.rating}⭐️</p>
          </div>
          <div className="wrapper-stock">
            <p className="stock-modal">Stock: {product[0]?.stock}</p>
          </div>
          <div className="wrapper-info">
            <p className="brand-modal">Brand: {product[0]?.brand}</p>
            <p className="category-modal">Category: {product[0]?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
