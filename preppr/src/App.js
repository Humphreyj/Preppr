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
import Backdrop from './components/ui/Backdrop';
import Sidedrawer from './components/sidedrawer/Sidedrawer';
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
      issue: false
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
      issue: false
    },
    {
      id: 2,
      name: 'Ranch Dressing',
      onHand: 0,
      onHandUnit: '',
      par: 4,
      parUnit: 'Quarts',
      station: 'Pantry',
      completed: false,
      issue: false
    }
  ])

  const [userData, setUserData] =useState({
    organization: '',
    org_type: '',
    username: '',
    role: '',

  })

  

  const [taggedIssues,manageTaggedIssues] = useState([{id: 0,name: "Onions",text:'None',loggedBy:'Pingus'}]);

  const addIssue = (id,newIssue) => {
   prepItems.map(item => {
     if(id === item.id) {
       manageTaggedIssues([...taggedIssues, newIssue])
     }
   })
  }
  const addItem = item => {
    setPrepItems([...prepItems, item])
  }
  

  const completeItem = id => {
    
    setPrepItems(prepItems.map(item => {
      if(item.id === id) {
        console.log(item)
       return {...item,completed : !item.completed}
      }else {
        return item;
      } 
    }))
  }

  const toggleIssue = id => {
    setPrepItems(prepItems.map(item => {
      if(item.id === id) {
        console.log(item)
       return {...item,issue : !item.issue}
      }else {
        return item;
      } 
    }))
  }  

  const resolveIssue = id => {
    // toggleIssue(id)
    manageTaggedIssues(taggedIssues.filter(item => item.id !== id))
  }

  const [drawerOpen,setDrawerOpen] =useState(false)

 
    const backdropHandler = () => {
      console.log(drawerOpen)
      setDrawerOpen(!drawerOpen)
    }
  

  return (
    
      
        <div className="App">
    <PrepItemContext.Provider value={{prepItems,addItem, completeItem,toggleIssue,addIssue, taggedIssues,resolveIssue}}>
      <UserContext.Provider value={{userData, setUserData,backdropHandler,drawerOpen}}>
      <Sidedrawer />
      <Navigation />
      
      <Backdrop />
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
