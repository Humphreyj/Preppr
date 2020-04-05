import React,{ useContext} from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import './backdrop.css';
// const Div = styled.div`
// .backdrop {
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     background-color: rgba(0,0,0,1);
//     z-index: 400;
//   }

//   .backdrop-closed {
//       display: none;
//   }
// `

const Backdrop = (props) => {

    const { drawerOpen, backdropHandler} = useContext(UserContext);
    console.log(drawerOpen)
    return (
        <div className={drawerOpen ? "backdrop" : "closed"} onClick={backdropHandler}></div>
    );
};



export default Backdrop;