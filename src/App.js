import React from 'react';
import MainSlider from "./components/main_slider/mainSlider";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './components/header/Nav';
import MainSliderBg from './Images/mainSliderBg.jpg';
import FormBg from './Images/formBg.jpg';
import Wzeg from './Images/wzeg.png';
import BlueZeg from './Images/blueZeg.png';
import TourBg from './Images/tourBg.jpg';
import TravelerBg from './Images/travelerBg.jpg';
import TravelerSlider from './components/travelerSlider/travelerSlider';
import AccivedCard from './components/cards/acchivedCard/acchivedCard';
import Video from './components/video_player/videoPlayer';
import CountrySlider from './components/countrySlider/countrySlider';
import About from './About';
import Service from './Service';
import Services from './components/serviceszComponent/services';
import PackageSlider from './components/packageSlider/packageSlider';
import Map from './components/map/map';
import {BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
      </div>
    </Router>
  );
}

const Home = () => (
  
  <>
    <div className='main__slider'>
      <img src={MainSliderBg} alt=""/>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <MainSlider/>
          </div>
        </div>
      </div>
    </div>
    <div className="services__container">
      <Services/>
    </div>
    <div className="video__container">
      <img className='tour__bg' src={TourBg} alt=""/>
      <div className="video_container-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_header">
                <h4 className="section_header-subtitle">DISCOVER</h4>
                <h3 className="section_header-title">Watch Our Video Tour</h3>
                <div className="zeg">
                  <img src={Wzeg} alt=""/>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="video">
                <Video/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="acchived">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <AccivedCard/>
          </div>
          <div className="col-lg-3">
            <AccivedCard/>
          </div>
          <div className="col-lg-3">
            <AccivedCard/>
          </div>
          <div className="col-lg-3">
            <AccivedCard/>
          </div>
        </div>
      </div>
    </div>
    <div className="package">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 ">
            <div className="section__header">
              <h4 className="section_header-subtitle">WE OFFER</h4>
              <h3 className="section_header-title">Popular Tour Package</h3>
              <div className="zeg">
                <img src={BlueZeg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <PackageSlider/>
          </div>
        </div>
      </div>
    </div>
    <div className="form__container">
      <img src={FormBg} alt=""/>
      <div className="form__overlay">
        <h3 className="form_overlay-title">Get 10% Off on Your Next Travel</h3>
        <h4 className="form_overlay-suntitle">Maximum doscout 1000$ per person</h4>
        <form>
          <input type="text" name="email" id="" placeholder='Enter your email' />
          <input type="submit" value="SUBSCRIBE"/>
        </form>
      </div>
    </div>
    <div className="traveler__container">
      <img className='traveler__bg' src={TravelerBg} alt=""/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 ">
            <div className="section__header">
              <h4 className="section_header-subtitle">OUR SMILES</h4>
              <h3 className="section_header-title">Happy Travelers</h3>
              <div className="zeg">
                <img src={BlueZeg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-12 ">
            <TravelerSlider/>
            <div className="plan__trip">
              <h3>Ready to plan your trip?</h3>
              <button type="submit">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="popular__countries">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section__header">
              <h4 className="section_header-subtitle">DESTINATION</h4>
              <h3 className="section_header-title">Popular Tourism Countries</h3>
              <div className="zeg">
                <img src={BlueZeg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <CountrySlider/>
          </div>
        </div>
      </div>
    </div>
    <div className="map__container">
      <Map 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDwxfea8ecYMmGKMO39JF1ko5bhF4UocpM&callback=initMap`} 
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    </div>
    
  </>
)

export default App;
