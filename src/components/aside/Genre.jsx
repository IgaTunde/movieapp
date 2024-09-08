import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Genre() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=b90cdfd0482956c54aac04934c15e07b"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setError("Failed to load genres.");
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="font-semibold pt-8">
      <h5 className="text-sm">GENRES</h5>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="text-xs">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="border-black/60 transition-all duration-100 rounded-full hover:border-2 py-1 my-3 pl-4"
            >
              <FontAwesomeIcon icon={faFilm} className="pr-1" />
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Genre;
