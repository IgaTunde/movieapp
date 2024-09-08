import MoviesInfo from "./MoviesInfo";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DetailContainer() {
  const { filteredMovies } = useContext(MovieContext);

  const firstMovieId = filteredMovies.length > 0 ? filteredMovies[4].id : null;

  return (
    <div className="lg:pl-56 px-6 pt-5 relative">
      <button className="border px-5 shadow-xl py-1 rounded-full my-3 dark:border-none dark:bg-darkBlueDarkModeEL dark:shadow-veryDarkBlueLightModeText dark:shadow-md hover:bg-darkBlueDarkModeEL hover:text-white dark:hover:bg-slate-800 transition-transform hover:translate-y-1 ease-in  border-black/30">
        <FontAwesomeIcon icon={faArrowLeft} className="pr-3" />
        Back
      </button>

      {firstMovieId ? (
        <MoviesInfo movieId={firstMovieId} />
      ) : (
        <p>No movie selected</p>
      )}
    </div>
  );
}

export default DetailContainer;
