// Inside Home component
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './Home.css';
import Main from './Main/Main';
import About from './About/About';
import Details from './Details/Details';
import Experience from './Experience/Experience';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <Router>
      <div className='home'>
        <div className='flex-container'>
          <div className='item1'>
            <Sidebar />
          </div>
          <div className='item2'>
            <div className='container-flex'>
              <Switch>
                <Route path="/home" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/details" component={Details} />
                <Route path="/experience" component={Experience} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Redirect exact from="/" to="/home" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
