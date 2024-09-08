function TopRatedCard({ movie }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="mt-2 font-bold">{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default TopRatedCard;
