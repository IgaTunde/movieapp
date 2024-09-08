import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

function AddToFavorites() {
const {isFavorite, toggleFavorite} = useContext(MovieContext)
  return (
    <button onClick={toggleFavorite} className="">
      <FontAwesomeIcon
        icon={isFavorite ? fasHeart : farHeart}
        className={`text-2xl md:text-3xl ${
          isFavorite ? "text-red-500" : "text-white"
        }`}
      />
    </button>
  );
}

export default AddToFavorites;
