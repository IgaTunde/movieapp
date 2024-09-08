import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";


function Shelf() {
  return (
    <div className="font-semibold pt-8">
      <h5 className="text-sm">SHELF</h5>
      <ul className="text-xs">
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4 ">
          <FontAwesomeIcon icon={faHeart} className="pr-1" /> Favorites
        </li>
        <li className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4">
          <FontAwesomeIcon icon={faEye} className="pr-1" /> Watch Later
        </li>
      </ul>
    </div>
  );
}

export default Shelf;
