import React,{ useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import './sidedrawer.css';
import { Link } from 'react-router-dom';

const Sidedrawer = () => {

    const { drawerOpen, backdropHandler } = useContext(UserContext);
    return (
        
            
            <div className={drawerOpen ? "sidedrawer-open" : "sidedrawer"}>
                <h1 className='side-title'>PR<i className="fas fa-list"></i>PR</h1>
                <nav>
                    <div>
                        <i className="fas icon fa-home"></i>
                        <Link 
                        onClick={backdropHandler}
                        to='/'>Home</Link>
                    </div>
                    <div>
                    <i className="fas fa-chart-pie icon"></i>
                        <Link 
                        onClick={backdropHandler}
                        to='/dashboard'>Dashboard</Link>
                    </div>
                    <div>
                        <i className="fas icon fa-clipboard-list"></i>
                        <Link 
                        onClick={backdropHandler}
                        to='/master'>Master List</Link>
                    </div>
                   
                    
                    
                </nav>
            </div>
            
        
    );
}

export default Sidedrawer;
