import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function GenreData({ data, onClick }) {
  return (
    <div
      className="hover:border-2 border-rose-600 p-1 rounded-xl hover:scale-125 cursor-pointer transition-all duration-500"
      onClick={onClick}
    >
      <div
        className={`bg-cover bg-center w-full rounded-xl h-72 text-white flex flex-col justify-between items-center shadow-md shadow-black/30`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${data.poster_path}")`,
        }}
      >
        <div className="flex flex-col justify-between w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 delay-300">
          <div className="flex justify-center gap-10 py-2 items-center bg-black/70 w-full rounded-t-xl">
            <FontAwesomeIcon icon={faEye} className="" />
            <FontAwesomeIcon icon={faHeart} className="" />
          </div>

          <div className="flex flex-col items-center justify-center bg-black/70 w-full rounded-b-xl pt-3 pb-2">
            <h2 className="font-bold text-center">{data.original_title}</h2>
            <span className="">
              <FontAwesomeIcon icon={faStar} className="" />
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenreList() {
  const [genreDetails, setGenreDetails] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { genreId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=b90cdfd0482956c54aac04934c15e07b&with_genres=${genreId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setGenreDetails(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genreId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="">
      <div className="flex justify-between items-center lg:pl-56 px-24 sm:px-5 lg:pr-12 text-gray-600 dark:text-white">
        <div>
          <h3 className="font-semibold lg:text-2xl ">POPULAR</h3>
          <p className="font-semibold text-[10px] lg:text-base lg:mt-0 -mt-1 ">
            MOVIES
          </p>
        </div>

        <div>
          <p className="font-bold text-sm lg:text-xl">Page: 1 of 2045</p>
        </div>
      </div>

      <div className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full pt-9 md:pt-12 lg:pl-56 gap-10 sm:gap-12 lg:gap-16 px-24 sm:px-8 lg:pr-16">
        {genreDetails.map((movie) => (
          <GenreData
            key={movie.id}
            data={movie}
            onClick={() => navigate(`/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default GenreList;
