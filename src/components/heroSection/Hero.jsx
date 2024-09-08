import DropDown from "./DropDown";
import Pages from "./Pages";
import MovieGenre from "./MovieGenre";

function Hero() {
  return (
    <div className="pt-[85px] lg:pt-28 px-6 lg:pl-56">
      <div className="flex justify-between items-center">
        <MovieGenre />
        <Pages />
      </div>
      <DropDown />
    </div>
  );
}

export default Hero;
