import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import WacthVideo from "./WacthVideo";
import AddToFavorites from "../buttons/AddToFavorites";
import WatchLater from "../buttons/WatchLater";

export default function DetailPoster({ movieId }) {
  const { movies, hoverHandlerEnter, hoverHandlerLeave, isHovered } =
    useContext(MovieContext);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <section className="">
      <h3 className="">{movie.original_title}</h3>
      <p className="">{movie.tagline}</p>
      <div
        className={`relative overflow-hidden group bg-center bg-cover w-full rounded-3xl h-[380px] md:h-[500px] text-white shadow-md shadow-black/30`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
        onMouseEnter={hoverHandlerEnter}
        onMouseLeave={hoverHandlerLeave}
      >
        {/* Bottom text */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 transform transition-transform duration-500 delay-100 ease-in-out ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h2 className="font-nor px-3 text-center md:text-2xl py-3 md:py-10 md:px-10">
            {movie.overview}
          </h2>
        </div>

        {/* Top text */}
        <div
          className={`absolute top-0 left-0 right-0 bg-black/70 transform transition-all duration-700 ease-in-out ${
            isHovered ? "translate-y-0 delay-500" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between gap-10 items-center py-2 px-9 md:px-24 md:py-4">
            <WatchLater />
            <WacthVideo />
            <AddToFavorites />
          </div>
        </div>
      </div>
    </section>
  );
}

//  <article
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilm, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
// import Carousels from "./Carousels";
//    className="pt-10 md:pt-14
//      flex flex-col items-center justify-center text-gray-600 dark:text-white text-sm md:text-base"
//  >
//    <h3 className="text-xs md:text-xl font-bold">MOVIE INFORMATION</h3>

//    <section className="flex flex-col items-center justify-center">
//      <h4 className="md:text-xl font-bold pt-5 md:pt-6">GENRES</h4>

//      <ul className="flex items-center gap-5 md:gap-10 pt-2 md:pt-3 ">
//        <li className="cursor-pointer">
//          <FontAwesomeIcon
//            icon={faFilm}
//            className="text-xs md:text-sm pr-2 md:pr-2"
//          />{" "}
//          Animation
//        </li>
//        <li className="cursor-pointer">
//          <FontAwesomeIcon
//            icon={faFilm}
//            className="text-xs md:text-sm pr-2 md:pr-2"
//          />{" "}
//          Family
//        </li>
//        <li className="cursor-pointer">
//          <FontAwesomeIcon
//            icon={faFilm}
//            className="text-xs md:text-sm pr-2 md:pr-2"
//          />{" "}
//          Adventure
//        </li>
//        <li className="cursor-pointer">
//          <FontAwesomeIcon
//            icon={faFilm}
//            className="text-xs md:text-sm pr-2 md:pr-2"
//          />{" "}
//          Comedy
//        </li>
//      </ul>

//      <ul className="pt-5 ">
//        <li className="flex flex-col items-center">
//          <h4 className="md:text-xl font-bold">PRODUCTION COUNTRIES</h4>
//          <p className="pt-2 md:text-2xl">United States of America</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">BUDGET</h4>
//          <p className="pt-2 md:text-xl">{movie.budget}</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">RUNTIME</h4>
//          <p className="pt-2 md:text-xl">97 Min.</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">ADULT MOVIES</h4>
//          <p className="pt-2 md:text-xl">{movie.adult}</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">SPOKEN LANGUAGE(S)</h4>
//          <p className="pt-2 md:text-xl">English</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">MOVIE STATUS</h4>
//          <p className="pt-2 md:text-xl">Released</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">RELEASE DATE</h4>
//          <p className="pt-2 md:text-xl">Tue Jun 11 2024</p>
//        </li>

//        <li className="flex flex-col items-center pt-5">
//          <h4 className="md:text-xl font-bold">LINKS</h4>
//          <div className="flex items-center gap-2 font-bold">
//            <a href="" className="">
//              <FontAwesomeIcon icon={faLink} className="h-[11px] pr-1" />
//              WEBSITE
//            </a>
//            <a href="" className="">
//              <FontAwesomeIcon icon={faLink} className="h-[11px] pr-1" />
//              IMDB
//            </a>
//          </div>
//        </li>

//        <li className="flex flex-col items-center pt-5 font-bold">
//          <h4 className="md:text-xl ">RATING</h4>
//          <p className="pt-2 md:text-xl">
//            <FontAwesomeIcon icon={faStar} /> 7.692
//          </p>
//        </li>
//      </ul>
//    </section>
//    <Carousels />
//  </article>;
