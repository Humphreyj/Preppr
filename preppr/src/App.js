import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/auth/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path='/' exact component={Home}/>
      <Route path='/login'component={Login}/>
      <Footer />

    </div>
  );
}

export default App;
