import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function Carousels() {
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
    <div className=" w-52">
      <h4 className="">Cast</h4>
      <main className="">
        <div className="">
          <Slider {...settings} className="">
            <div className="bg-[url('./src/components/images/chucky.avif')] rounded-full h-[50px] bg-center bg-contain shadow-sm shadow-black/30"></div>
            <div className="bg-[url('./src/components/images/chucky.avif')] rounded-full h-[50px] bg-center bg-contain shadow-sm shadow-black/30"></div>
            <div className="bg-[url('./src/components/images/chucky.avif')] rounded-full h-[50px] bg-center bg-contain shadow-sm shadow-black/30"></div>
            <div className="bg-[url('./src/components/images/chucky.avif')] rounded-full h-[50px] bg-center bg-contain shadow-sm shadow-black/30"></div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default Carousels;
