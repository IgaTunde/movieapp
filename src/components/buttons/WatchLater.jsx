
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as farEye } from "@fortawesome/free-regular-svg-icons";
import { faEye as fasEye } from "@fortawesome/free-solid-svg-icons";

function WatchLater() {
 const{isWatchLater, toggleWatchLater} = useContext(MovieContext)

  return (
    <button onClick={toggleWatchLater} className="">
      <FontAwesomeIcon
        icon={isWatchLater ? fasEye : farEye}
        className={`text-2xl md:text-4xl ${isWatchLater ? "text-red-500" : "text-white"}`}
      />
    </button>
  );
}

export default WatchLater;
