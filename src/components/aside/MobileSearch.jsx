import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function MobileSearch() {
  const { inputHandler, searchMovie } = useContext(MovieContext);
  return (
    <div className="relative lg:hidden">
      <span className="absolute inset-y-0 left-0 flex items-center py-[15px] px-[10px] text-white cursor-pointer bg-darkBlueDarkModeEL h-3 rounded-full">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="h-[10px] w-[10px]"
        />
      </span>
      <input
        onChange={inputHandler}
        value={searchMovie}
        type="search"
        className="search-input pl-16 py-1 rounded-full focus:outline-none focus:ring-offset-gray-700 focus:bg-darkBlueDarkModeEL border-none shadow-lg cursor-pointer hidden-input dark:bg-darkBlueDarkModeEL text-white"
        placeholder="Search for movie..."
      />
    </div>
  );
}

export default MobileSearch;
