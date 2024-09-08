import DarkMode from "./DarkMode";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";

function MovieHeader() {
  return (
    <div className="relative z-10">
      <div className="fixed top-0 w-full flex justify-between items-center py-4 px-6 shadow-md lg:pl-56 bg- dark:bg-veryDarkBlueDarkModeBg bg-white">
        <Hamburger />
        <SearchBar />
        <DarkMode />
      </div>
    </div>
  );
}

export default MovieHeader;
