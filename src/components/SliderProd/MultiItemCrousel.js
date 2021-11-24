import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { multiData } from "./Data";
import img from "../../assests/imges/img7.png"
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
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

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  return (
      <div className="carouselParent flex-row-reverse">
    
    <div style={{ margin: "30px" }} className="carousel">
      
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
            
          <Card item={item} key={item}/>
        ))}
      </Slider>
    </div>
    <div className="giftImg"><img src={img}/></div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" , background:"white",
     marginLeft:"4px",marginRight:"4px",borderRadius:"7px",padding:"10px"}}>
      <img
        className="multi__image"
        src={item.img}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "30px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" ,color: "gray",height:"60px"}}>{item.det}</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "black" }}>
        {item.price}تومان
      </p>
      <strike style={{ fontSize: "14px", padding: "5px 0", color: "gray", textAlign:"left" }}>
        {item.strike}
      </strike>
    </div>
  );
};

export default MultiItemCarousel;