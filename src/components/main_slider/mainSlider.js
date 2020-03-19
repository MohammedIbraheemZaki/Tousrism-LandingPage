import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from '../../Images/sticker.png'
import Mouse from '../../Images/mouseDown.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block", 
        
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
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
    </div>
  );
}
function MainSlider () {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center'
    }} >
      <Slider {...settings} className='ssl' >
        <div>
          <div className="main__slide">
            <div className="offer__stiker">
              <img src={sticker} alt=""/>
              <p>From $199/Person</p>
            </div>
            <h1 className="main__header">Discover Greece</h1>
            <h2 className="sub__header">TRAVEL WITH UNIQUE EXPERIENCE</h2>
          </div>
        </div>
        <div>
          <div className="main__slide">
            <div className="offer__stiker">
              <img src={sticker} alt=""/>
              <p>From $199/Person</p>
            </div>
            <h1 className="main__header">Discover Greece</h1>
            <h2 className="sub__header">TRAVEL WITH UNIQUE EXPERIENCE</h2>
          </div>
        </div>
        <div>
          <div className="main__slide">
            <div className="offer__stiker">
              <img src={sticker} alt=""/>
              <p>From $199/Person</p>
            </div>
            <h1 className="main__header">Discover Greece</h1>
            <h2 className="sub__header">TRAVEL WITH UNIQUE EXPERIENCE</h2>
          </div>
        </div>
        <div>
          <div className="main__slide">
            <div className="offer__stiker">
              <img src={sticker} alt=""/>
              <p>From $199/Person</p>
            </div>
            <h1 className="main__header">Discover Greece</h1>
            <h2 className="sub__header">TRAVEL WITH UNIQUE EXPERIENCE</h2>
          </div>
        </div>
      </Slider>
      <div className="mouse__down">
        <img src={Mouse} alt=""/>
      </div>
    </div>
  )
}

export default MainSlider;