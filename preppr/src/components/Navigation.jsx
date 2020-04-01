import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
    height: 4em;
    padding: 2%;
    background-color: dodgerblue;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-family: 'Viga', sans-serif;

    h1 {
        letter-spacing: .2em;
    }

    .fas {
        font-size: .88em;
    }
    
    nav {
        a {
            color: white;
            margin: 0 .5em;
            font-size: 1.2em;
        }
    }
`

const Navigation = () => {
    return (
        <Div>
            <h1>PR<i className="fas fa-list"></i>PR</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/master'>Master List</Link>
            </nav>
            
        </Div>
    );
}

export default Navigation;
