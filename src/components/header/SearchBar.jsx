import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function SearchBar() {
    const { inputHandler } = useContext(MovieContext);
  return (
    <div className=" relative hidden lg:block">
      <span className="absolute inset-y-0 left-0 flex items-center px-3 text-white cursor-pointer bg-darkBlueDarkModeEL  rounded-full ">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        onChange={inputHandler}
        type="search"
        className="search-input pl-16 py-2 rounded-full focus:outline-none focus:ring-offset-gray-700 focus:bg-darkBlueDarkModeEL border-none shadow-lg cursor-pointer hidden-input dark:bg-darkBlueDarkModeEL text-white"
        placeholder="Search for movie..."
      />
    </div>
  );
}

export default SearchBar;
