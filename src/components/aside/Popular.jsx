import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Popular() {
  const { fetchPopularMovies } = useContext(MovieContext);
  const handleClick = () => {
    fetchPopularMovies();
  };

  return <div onClick={handleClick}>Popular</div>;
}

export default Popular;
