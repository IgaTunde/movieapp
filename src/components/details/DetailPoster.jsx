import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import WacthVideo from "./WacthVideo";
import AddToFavorites from "../buttons/AddToFavorites";
import WatchLater from "../buttons/WatchLater";

const MoviePoster = ({ title, tagline, backdropPath, overview }) => {
  const { hoverHandlerEnter, hoverHandlerLeave, isHovered } =
    useContext(MovieContext);

  return (
    <section className="movie-poster">
      <h3 className="uppercase font-semibold text-gray-600 dark:text-white md:text-2xl pb-2 md:pb-3 pl-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-white text-sm md:text-xl font-suse pb-6 md:pb-8 pl-2">
        {tagline}
      </p>
      <div
        className={`relative overflow-hidden group bg-center bg-cover w-full rounded-[2.5rem] md:rounded-[4rem] h-[380px] md:h-[500px] text-white shadow-md shadow-black/30`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdropPath})`,
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
            {overview}
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
};

export default MoviePoster;
