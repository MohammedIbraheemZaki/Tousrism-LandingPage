import React from 'react';
import MainSlider from "./components/main_slider/mainSlider";
import './App.css';
import Nav from './components/header/Nav';
import MainSliderBg from './Images/mainSliderBg.jpg';
import Wzeg from './Images/wzeg.png';
import TourBg from './Images/tourBg.jpg';
// import videoImg from './Images/videoBlaceholder.jpg';
import Video from './components/video_player/videoPlayer';
import About from './About';
import Service from './Service';
import Services from './components/serviceszComponent/services'
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
          <div className="row justify-content-center  ">
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
  </>
)

export default App;
