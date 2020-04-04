import React,{ useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import './sidedrawer.css';
import { Link } from 'react-router-dom';

const Sidedrawer = () => {

    const { drawerOpen, backdropHandler } = useContext(UserContext);
    return (
        
            
            <div className={drawerOpen ? "sidedrawer-open" : "sidedrawer"}>
                <h1 className='title'>PR<i className="fas fa-list"></i>PR</h1>
                <nav>
                    <Link 
                    onClick={backdropHandler}
                    to='/'>Home</Link>
                    <Link 
                    onClick={backdropHandler}
                    to='/dashboard'>Dashboard</Link>
                    <Link 
                    onClick={backdropHandler}
                    to='/master'>Master List</Link>
                </nav>
            </div>
            
        
    );
}

export default Sidedrawer;
