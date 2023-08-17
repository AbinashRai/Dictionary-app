import React, { useRef } from "react";
import { GoSearch } from "react-icons/go";

const SearchInput = ({ onSearch }) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.current.value.trim() !== "") {
      onSearch(searchInput.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex">
      <input
        type="search"
        placeholder="Search here.."
        className="py-2 pl-10 pr-3 border-2 rounded-lg"
        ref={searchInput}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <GoSearch />
      </span>
    </form>
  );
};

export default SearchInput;
