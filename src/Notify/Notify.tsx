import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ToastContainer, toast } from "react-toastify";

export const Notify: FC = () => {
  const onErorr = useSelector((state: RootState) => state.notify);
  toast.error(`Code: ${onErorr?.status} Message: ${onErorr?.erorrMessage}`);

  return <ToastContainer />;
};
