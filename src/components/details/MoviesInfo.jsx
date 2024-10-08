import { useEffect, useState } from "react";
import MoviePoster from "./DetailPoster";
import MovieArticles from "././MovieArticles";
import MovieCarousel from "./Carousels";
import BounceLoader from "react-spinners/BounceLoader";

function MoviesInfo({ movieId }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=b90cdfd0482956c54aac04934c15e07b&language=en-US&append_to_response=credits`
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

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center">
        <BounceLoader
          color={"red"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  if (error) return <p>Error: {error}</p>;
  if (!movieDetails) return <p>Movie details not found.</p>;

  return (
    <div className="movies-info">
      <MoviePoster
        title={movieDetails.original_title}
        tagline={movieDetails.tagline}
        backdropPath={movieDetails.backdrop_path}
        overview={movieDetails.overview}
      />
      <div className="flex flex-col items-center justify-center">
        <MovieArticles movieDetails={movieDetails} />
        <MovieCarousel cast={movieDetails.credits.cast} />
      </div>
    </div>
  );
}

export default MoviesInfo;
