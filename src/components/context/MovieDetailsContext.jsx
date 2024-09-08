import { createContext, useState, useContext } from "react";

const MovieDetailsContext = createContext();

export function useMovieDetails() {
  const context = useContext(MovieDetailsContext);
  if (!context) {
    throw new Error(
      "useMovieDetails must be used within a MovieDetailsProvider"
    );
  }
  return context;
}

export function MovieDetailsProvider({ children }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async (movieDetailsId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieDetailsId}?api_key=b90cdfd0482956c54aac04934c15e07b&language=en-US`
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

  const value = {
    movieDetails,
    loading,
    error,
    fetchMovieDetails,
  };

  return (
    <MovieDetailsContext.Provider value={value}>
      {children}
    </MovieDetailsContext.Provider>
  );
}

export default MovieDetailsProvider;
