import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChartBar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Popular from "./Popular";
import TopRated from "./TopRated";

function Discover() {
  return (
    <div className="font-semibold pt-8">
      <h5 className="text-sm">DISCOVER</h5>
      <ul className="text-xs">
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4 flex items-center ">
          <FontAwesomeIcon icon={faStar} className="pr-1" /> <Popular />
        </li>
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4 flex items-center">
          <FontAwesomeIcon icon={faChartBar} className="pr-1" /> <TopRated />
        </li>
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="pr-1" /> Upcoming
        </li>
      </ul>
    </div>
  );
}

export default Discover;
