import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faLink, faStar } from "@fortawesome/free-solid-svg-icons";

const MovieArticles = ({ movieDetails }) => {
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
                className="text-xs md:text-sm pr-2 md:pr-2 font-suse"
              />
              {genre.name}
            </li>
          ))}
        </ul>

        <ul className="pt-5 ">
          <li className="flex flex-col items-center">
            <h4 className="md:text-xl font-bold">PRODUCTION COUNTRIES</h4>
            <p className="pt-2 md:text-2xlfont-suse">
              {movieDetails.production_countries
                .map((country) => country.name)
                .join(", ")}
            </p>
          </li>

          <li className="flex flex-col items-center pt-6 md:pt-10">
            <h4 className="md:text-xl font-bold">BUDGET</h4>
            <p className="pt-2 md:text-xl font-suse">
              {movieDetails.budget
                ? `$${movieDetails.budget.toLocaleString()}`
                : "N/A"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">RUNTIME</h4>
            <p className="pt-2 md:text-xl font-suse">
              {movieDetails.runtime ? `${movieDetails.runtime} Min.` : "N/A"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">ADULT MOVIE</h4>
            <p className="pt-2 md:text-xl font-suse">
              {movieDetails.adult === false ? "No" : "Yes"}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">SPOKEN LANGUAGE(S)</h4>
            <p className="pt-2 md:text-xl font-suse">
              {movieDetails.spoken_languages
                .map((lang) => lang.name)
                .join(", ")}
            </p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">MOVIE STATUS</h4>
            <p className="pt-2 md:text-xl font-suse">{movieDetails.status}</p>
          </li>

          <li className="flex flex-col items-center pt-5">
            <h4 className="md:text-xl font-bold">RELEASE DATE</h4>
            <p className="pt-2 md:text-xl font-suse">
              {movieDetails.release_date}
            </p>
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
            <p className="pt-2 md:text-xl font-suse">
              <FontAwesomeIcon icon={faStar} /> {movieDetails.vote_average}
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default MovieArticles;
