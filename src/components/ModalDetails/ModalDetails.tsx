import { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModal } from "../../Redux/slices/modal";
import { RootState } from "../../Redux/store";
import "./modalDetails.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalDetailsProps {
  handleClick: () => void;
}

export const ModalDetails: FC<ModalDetailsProps> = ({ handleClick }) => {
  const activeModal = useSelector(
    (state: RootState) => state.modal.isOpenModal
  );
  const product = useSelector((state: RootState) => state.products.product);

  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        keepMounted
        open={activeModal}
        onClose={() => dispatch(onOpenModal(false))}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <div className="wrapper-header">
              <h1 className="header-modal">{product[0]?.title}</h1>
              <img
                className="img-modal"
                src={product[0]?.thumbnail}
                alt=""
                width="100"
              />
            </div>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <div>
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
                <p className="category-modal">
                  Category: {product[0]?.category}
                </p>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

{
  /* <div className="backddrop"> */
}
{
  /* <div className="modal-container">

</div> */
}
// </div>;
