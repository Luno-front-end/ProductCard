import { FC } from "react";
import { IProduct } from "../../types/types";

import "./productsItem.scss";

interface ProductsItemProps {
  product: IProduct;
  handleClick: (id: number) => void;
}

export const ProductsItem: FC<ProductsItemProps> = ({
  product,
  handleClick,
}) => {
  return (
    <li className="prouct-item" onClick={() => handleClick(product.id)}>
      <div>
        <h1> {product.title}</h1>
        <div className="wrapper-img">
          <img
            className="img-card"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
      </div>
      <div className="wrappr-contents">
        <div>
          <p>{product.brand}</p>
          <p>{product.price}$</p>
        </div>
        <p>{product.rating}⭐️</p>
      </div>
    </li>
  );
};
