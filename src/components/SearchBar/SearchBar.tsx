import { FC } from "react";
import { useSelector } from "react-redux";
import { useSearchBar } from "../../hooks/useSearchBar";
import { RootState } from "../../Redux/store";

import "./searchBar.scss";

export const SearchBar: FC = () => {
  const page = useSelector((state: RootState) => state.page);
  const { handleChenge } = useSearchBar();

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
