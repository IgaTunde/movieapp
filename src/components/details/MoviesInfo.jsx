import { useEffect, useState, usec } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import Carousels from "./Carousels";

function MoviesInfo({ movieId }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=b90cdfd0482956c54aac04934c15e07b&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movieDetails) return <p>Movie details not found.</p>;

  return (
    <article
      className="pt-10 md:pt-14
     flex flex-col items-center justify-center text-gray-600 dark:text-white text-sm md:text-base"
    >
      <h3 className="text-xs md:text-xl font-extrabold bg-gradient-to-r from-red-500 via-purple-700 to-yellow-500 inline-block text-transparent bg-clip-text">
        MOVIE INFORMATION
      </h3>

      <section className="flex flex-col items-center justify-center">
        <h4 className="md:text-xl font-bold pt-5 md:pt-6">GENRES</h4>
        <ul className="flex items-center gap-5 md:gap-10 pt-2 md:pt-3 ">
          {movieDetails.genres.map((genre) => (
            <li key={genre.id} className="cursor-pointer">
              <FontAwesomeIcon
                icon={faFilm}
                className="text-xs md:text-sm pr-2 md:pr-2"
              />
              {genre.name}
            </li>
          ))}
        </ul>

        <ul className="pt-5 ">
          <li className="flex flex-col items-center">
            <h4 className="md:text-xl font-bold">PRODUCTION COUNTRIES</h4>
            <p className="pt-2 md:text-2xl">
              {movieDetails.production_countries
                .map((country) => country.name)
                .join(", ")}
            </p>
          </li>

          <li className="flex flex-col items-center pt-6 md:pt-10">
            <h4 className="md:text-xl font-bold">BUDGET</h4>
            <p className="pt-2 md:text-xl">
              {movieDetails.budget
                ? `$${movieDetails.budget.toLocaleString()}`
                : "N/A"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">RUNTIME</h4>
            <p className="pt-2 md:text-xl">
              {movieDetails.runtime ? `${movieDetails.runtime} Min.` : "N/A"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">ADULT MOVIE</h4>
            <p className="pt-2 md:text-xl">
              {movieDetails.adult === false ? "No" : "Yes"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">SPOKEN LANGUAGE(S)</h4>
            <p className="pt-2 md:text-xl">
              {movieDetails.spoken_languages
                .map((lang) => lang.name)
                .join(", ")}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">MOVIE STATUS</h4>
            <p className="pt-2 md:text-xl">{movieDetails.status}</p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">RELEASE DATE</h4>
            <p className="pt-2 md:text-xl">{movieDetails.release_date}</p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">LINKS</h4>
            <div className="flex items-center gap-2 font-bold pt-2">
              {movieDetails.homepage && (
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className="h-[11px] pr-1" />
                  WEBSITE
                </a>
              )}
              {movieDetails.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className="h-[11px] pr-1" />
                  IMDB
                </a>
              )}
            </div>
          </li>

          <li className="flex flex-col items-center pt-7 font-bold">
            <h4 className="md:text-xl ">RATING</h4>
            <p className="pt-2 md:text-xl">
              <FontAwesomeIcon icon={faStar} /> {movieDetails.vote_average}
            </p>
          </li>
        </ul>
      </section>
      <Carousels />
    </article>
  );
}

export default MoviesInfo;
