import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChartBar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Discover() {
  const { menuOpen, toggleMenu } = useContext(MovieContext);

  return (
    <div className="font-semibold pt-8">
      <h5 className="text-sm">DISCOVER</h5>
      <ul className="text-xs">
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4 flex items-center">
          <Link to="/" className="flex items-center" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faStar} className="pr-1" /> Popular
          </Link>
        </li>

        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4">
          <Link
            to="/topRated"
            className="flex items-center"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faChartBar} className="pr-1" /> Top Rated
          </Link>
        </li>

        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4">
          <Link
            to="/upcoming"
            className="flex items-center"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="pr-1" /> Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Discover;
