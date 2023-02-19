import { FC } from "react";
import { IProduct } from "../../types/types";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

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
    <li onClick={() => handleClick(product.id)} className="prouct-item">
      <Card sx={{ maxWidth: 345 }} className="prouct-card">
        <CardHeader title={product.title} subheader={`${product.price}$`} />
        <CardMedia
          component="img"
          height="194"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardActions disableSpacing>
          <p>{product.rating}⭐️</p>
        </CardActions>
      </Card>
    </li>
  );
};
