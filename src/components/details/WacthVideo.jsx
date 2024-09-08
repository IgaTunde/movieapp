import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

function WacthVideo() {
  return (
    <button className="group relative font-semibold border-darkBlueDarkModeEL border rounded-full px-6 py-2 overflow-hidden transition-colors duration-300 ease-in-out hover:border-0 ">
      <span className="relative z-10">
        <FontAwesomeIcon icon={faVideoCamera} className="pr-1" /> Watch Video
      </span>
      <div
        className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-1000 ease-in-out skew-x-[-50deg] origin-left"
        style={{ left: "-10%", right: "-10%" }}
      />
    </button>
  );
}

export default WacthVideo;
