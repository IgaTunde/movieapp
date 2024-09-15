import { createContext, useState, useEffect } from "react";

export const TopRatedContext = createContext({
  movieDetails: null,
  loading: false,
  error: null,
  fetchMovieDetails: () => {},
});

export default function TopProvider({ children }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchMovieDetails = async () => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=b90cdfd0482956c54aac04934c15e07b"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch movie details");
  //     }
  //     const data = await response.json();
  //     setMovieDetails(data);
  //     console.log(data)
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b90cdfd0482956c54aac04934c15e07b"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetails(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <TopRatedContext.Provider
      value={{ movieDetails, error, loading }}
    >
      {children}
    </TopRatedContext.Provider>
  );
}
