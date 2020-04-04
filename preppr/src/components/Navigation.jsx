import React,{ useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Div = styled.div`
    height: 4em;
    padding: 3%;
    background-color: dodgerblue;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-family: 'Viga', sans-serif;

    h1 {
        letter-spacing: .2em;
    }

    .fa-list {
        font-size: .88em;
    }

    .fa-hamburger {
        cursor: pointer;
        transition: all 0.3s ease;
        @media(min-width: 800px) {
            display: none;
        }
    }

    .rotate {
        transform: rotate(90deg);
    }
    
    nav {
        display: none;
        a {
            color: white;
            margin: 0 .5em;
            font-size: 1.2em;
        }
        @media(min-width: 800px) {
            display: block;
        }
    }
`

const Navigation = () => {

    const { backdropHandler, drawerOpen } = useContext(UserContext)
    return (
        <Div>
            <h1>PR<i className="fas fa-list"></i>PR</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/master'>Master List</Link>
            </nav>
            <i 
            onClick={backdropHandler}
            className={drawerOpen ? 'fas fa-hamburger fa-2x rotate' : "fas fa-hamburger fa-2x"}></i>
            
        </Div>
    );
}

export default Navigation;
