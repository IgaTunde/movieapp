import MoviesInfo from "./MoviesInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function DetailContainer() {
  const { movieId } = useParams();

  return (
    <div className="lg:pl-56 px-6 pt-5 relative">
      <button className="border px-5 shadow-xl py-1 rounded-full my-3 dark:border-none dark:bg-darkBlueDarkModeEL dark:shadow-veryDarkBlueLightModeText dark:shadow-md hover:bg-darkBlueDarkModeEL hover:text-white dark:hover:bg-slate-800 transition-transform hover:translate-y-1 ease-in  border-black/30">
        <FontAwesomeIcon icon={faArrowLeft} className="pr-3" />
        Back
      </button>

      {movieId ? <MoviesInfo movieId={movieId} /> : <p>No movie selected</p>}
    </div>
  );
}

export default DetailContainer;
