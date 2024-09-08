import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  const { darkModeHandler, dark } = useContext(MovieContext);
  return (
    <button
      className="flex items-center gap-2 z-10"
      onClick={() => darkModeHandler()}
    >
      {dark && <FontAwesomeIcon icon={faSun} />}
      {!dark && <FontAwesomeIcon icon={faMoon} />}
      {!dark && <h3 className="font-bold text-sm">Dark Mode</h3>}
      {dark && <h3 className="font-bold text-sm">Light Mode</h3>}
    </button>
  );
}
