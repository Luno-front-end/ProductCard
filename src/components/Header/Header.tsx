import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchBar } from "../SearchBar/SearchBar";
import "./header.scss";

interface HeaderProps {
  getProduct: () => void;
}

export const Header: FC<HeaderProps> = ({ getProduct }) => {
  return (
    <div className="container-header">
      <form className="form-search">
        <SearchBar />
        <div className="btn-search">
          <BsSearch />
        </div>
      </form>
    </div>
  );
};
