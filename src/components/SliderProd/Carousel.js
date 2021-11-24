import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data } from "./Data";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} /> */}
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} /> */}
    </div>
  );
};

const Carousel = () => {
  return (
      <div className="carouselParent">
    <div style={{ margin: "30px",marginRight:"0",marginLeft:"0" }} className="carousel">
     
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={4}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "40vh" }} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;