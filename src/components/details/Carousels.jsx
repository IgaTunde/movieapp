import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ cast }) => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="movie-carousel w-52 mt-5">
      <h4 className="text-center md:text-xl font-bold pb-3 md:pb-5 text-gray-600 dark:text-white">
        CAST
      </h4>
      <Slider {...settings}>
        {cast.map((castMember) => (
          <div
            key={castMember.cast_id}
            className="px-2 flex flex-col items-center justify-center"
          >
            <div
              className="bg-cover bg-center rounded-full h-[50px] w-[50px] mx-auto shadow-sm shadow-black/30"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${castMember.profile_path})`,
              }}
            ></div>
            <p className="mt-2 text-xs text-center">{castMember.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2b3945",
        borderRadius: "100px",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2b3945",
        borderRadius: "100px",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    />
  );
}
