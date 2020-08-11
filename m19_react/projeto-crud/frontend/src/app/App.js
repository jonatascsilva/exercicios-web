import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Routes from './Routes'
import Footer from '../components/templates/Footer';

const App = props => {
  return (
    <HashRouter>
      <div className="App">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;