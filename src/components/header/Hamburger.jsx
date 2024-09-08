import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Hamburger() {
  const { hamburgerHandler, menuOpen } = useContext(MovieContext);
  return (
    <button
      className="flex items-center gap-2 z-10 lg:hidden "
      onClick={hamburgerHandler}
    >
      {menuOpen ? (
        <FontAwesomeIcon icon={faX} className="h-7" />
      ) : (
        <FontAwesomeIcon icon={faBars} className="h-7" />
      )}
    </button>
  );
}

export default Hamburger;
