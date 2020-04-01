import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Master from './components/masterList/Master';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';

import PrepItemContext from './contexts/PrepItemContext';
import UserContext from './contexts/UserContext';

function App() {

  const [prepItems, setPrepItems] = useState([
    {
      id: 0,
      name: 'BBQ Sauce',
      onHand: 2,
      onHandUnit: 'Cups',
      par: 2,
      parUnit: 'Quarts',
      station: 'Grill',
      completed: false,
    },
    {
      id: 1,
      name: 'Meat Portions',
      onHand: 10,
      onHandUnit: 'Each',
      par: 20,
      parUnit: 'Each',
      station: 'Grill',
      completed: false,
    }
  ])

  const addItem = item => {
    setPrepItems([...prepItems, item])
  }

  const [userData, setUserData] =useState({
    organization: '',
    org_type: '',
    username: '',
    role: '',

  })

 

 

  const removeItem = id => {
    // setPrepItems(prepItems.filter(item => item.id !== id))
    setPrepItems(prepItems.map(item => {
      if(item.id === id) {
        console.log(item)
       return {...item,completed : !item.completed}
      }else {
        return item;
      }
      
    }))
  }
  return (
    <div className="App">
    <PrepItemContext.Provider value={{prepItems,addItem, removeItem}}>
      <UserContext.Provider value={{userData, setUserData}}>
      <Navigation />
      <Route path='/' exact component={Home}/>
      <Route path='/login'component={Login}/>
      <Route path='/register'component={Register}/>
      <Route path = '/master' component={Master} />
      <Route path='/dashboard' component={Dashboard} />
      <Footer />
      </UserContext.Provider>
    </PrepItemContext.Provider>

    </div>
  );
}

export default App;
