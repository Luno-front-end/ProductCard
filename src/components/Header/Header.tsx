import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { Container } from "../Container/Container";
import { SearchBar } from "../SearchBar/SearchBar";
import "./header.scss";

interface HeaderProps {
  getProduct: () => void;
}

export const Header: FC<HeaderProps> = ({ getProduct }) => {
  return (
    <div className="container-header">
      <Container>
        <form className="form-search">
          <SearchBar />
          <button type="submit" className="btn-search">
            <BsSearch />
          </button>
        </form>
      </Container>
    </div>
  );
};
