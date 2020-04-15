import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import demo from '../img/preppr.png'

const Div = styled.div`
.hero {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 1em auto;
     img {
         width: 80%;
         height: 80%;
         border-radius: 5px;
     }
}
.home-info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}
.buttons {
    button {
        margin: 1em;
        height: 2em;
        width: 6em;
        font-size: 1.2em;
        cursor: pointer;
    }
    .login {
        background-color: green;
        color: white;
        text-shadow: 2px 2px 2px black;
    }
    .register {
        background-color: red;
        color: white;
        text-shadow: 2px 2px 2px black;  
    }
}

@media(min-width: 1000px) {
    .hero {
        flex-direction: row;
        width: 60%;
    }
    .home-info {
        flex-direction: row;
        width: 60%;
    }
}

`

const Home = () => {
    return (
        <Div>
        <div className="hero">
            <div>
                <h1 className="title">Preppr</h1>
                <h4 className="tagline">A collaborative Prep List tool.</h4>
            </div>
            <div>
                <img src={demo} alt=""/>
            </div>
        </div>
        {/* hero section */}
        <div className="home-info">
            <div className="home-text">
                <p className="info-item">Share your list between all your staff!</p>
                <p className="info-item">Keep track of what got done when!</p>
                <p className="info-item">Update your list on the fly!</p>
            </div>
            <div>
                <h1>DEMO IMAGE HERE</h1>
            </div>
        </div>
        {/* home-info */}
        <div className="buttons">
            <Link to='/login' ><button className="login">Login</button></Link>
            <Link to='/register'><button className="register">Register</button></Link>
        </div>
            
        </Div>
    );
}

export default Home;
