import React from 'react';
import SercivesSlider from "./servicesSlider";
import './services.css';
import BlueZeg from '../../Images/blueZeg.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function Services(){
  
  return(
    <div className="services__wrapper">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <div className="services__details">
              <h4 className="service_details-subtitle">DISCOVER</h4>
              <h3 className="service_details-title">Our Hot Services</h3>
              <div className="zeg">
                <img src={BlueZeg} alt=""/>
              </div>
              <p className="service_details-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
          </div>
          <div className="col-lg-9">
            <SercivesSlider/>
            <SercivesSlider/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;