import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext({
  movies: [],
  darkModeHandler: () => {},
  hamburgerHandler: () => {},
  toggleMenu: () => {},
  handleSidebarClick: () => {},
  inputHandler: () => {},
  getMovies: () => {},
  setMovies: () => {},
  hoverHandlerLeave: () => {},
  hoverHandlerEnter: () => {},
  toggleFavorite: () => {},
  toggleWatchLater: () => {},
  filteredMovies: [],
  dark: false,
  menuOpen: false,
  searchMovie: "",
  isHovered: false,
  isFavorite: "",
  isWatchLater: "",
});

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=b90cdfd0482956c54aac04934c15e07b"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        setFilteredMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchMovie, movies]);

  const toggleWatchLater = () => setIsWatchLater(!isWatchLater);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const hoverHandlerEnter = () => setIsHovered(true);

  const hoverHandlerLeave = () => setIsHovered(false);

  function getMovies() {
    return movies;
  }

  const inputHandler = (e) => {
    setSearchMovie(e.target.value);
  };

  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  function hamburgerHandler() {
    setMenuOpen(!menuOpen);
  }

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSidebarClick = (e) => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
    e.stopPropagation();
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        darkModeHandler,
        hamburgerHandler,
        dark,
        menuOpen,
        toggleMenu,
        handleSidebarClick,
        inputHandler,
        filteredMovies,
        searchMovie,
        getMovies,
        isHovered,
        hoverHandlerEnter,
        hoverHandlerLeave,
        isFavorite,
        toggleFavorite,
        isWatchLater,
        toggleWatchLater,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// const fetchPopularMovies = () => {
//   fetch(
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=b90cdfd0482956c54aac04934c15e07b"
//   )
// https://api.themoviedb.org/3/genre/movie/list?api_key=b90cdfd0482956c54aac04934c15e07b
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.results);
//       setFilteredMovies(json.results);
//     });
// };

// useEffect(() => {
//   fetchPopularMovies();
// }, []);
