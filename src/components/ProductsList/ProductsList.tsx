import { FC } from "react";
import { IProduct } from "../../types/types";
import { ProductsItem } from "../ProductsItem/ProductsItem";

import "./productsList.scss";

interface ProductsListProps {
  products: IProduct[];
  handleClick: (id: number) => void;
}

export const ProductsList: FC<ProductsListProps> = ({
  products,
  handleClick,
}) => {
  return (
    <ul className="container-list-prouct">
      {products.map((product) => (
        <ProductsItem
          key={product.id}
          product={product}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};
