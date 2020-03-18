import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Service from './Service';
import {BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>App home Page</h1> */}
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        {/* <About/> */}
        {/* <Shop/> */}
        
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    {/* <h1>home page</h1> */}
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid et. Ex accusamus harum, cum voluptatum beatae blanditiis exercitationem cupiditate eligendi amet, sint vitae quos ipsam deserunt ratione veniam? Unde!
          </p>
        </div>
        <div className="col-lg-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi perferendis itaque. Quia culpa ipsa atque eum in animi. Porro officia asperiores sunt delectus quasi vel consectetur ea doloremque iste.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default App;
