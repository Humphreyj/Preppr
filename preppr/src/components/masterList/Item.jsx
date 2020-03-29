import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';

const ItemDiv = styled.div`
z-index: 100;
position: relative;

.item-name {
    display: flex;
    justify-content: center;
    .station {
        margin-left: 1em;
    }
}
.quantity {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal {
    border: 1px solid black;
    background-color: black;
    padding: 2%;
    color: white;
    width: 50%;
    margin: 0 auto;
    box-shadow: 2px 2px 2px #444;
    z-index: 500;
    position: absolute;
    left: 23%;
    transition: all .3s ease-in;
}

.closed {
    display: none;
}

.buttons {
    width: 40%;
    margin: 1em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

const Item = (props) => {
    const {removeItem, setCompleted} = useContext(PrepItemContext)
    const [issue, setIssue] = useState(false)

    
    return (
        <ItemDiv>
            <div className={!issue ? 'closed': 'modal'}>
            <h4 className="name">{props.name}</h4>
            
            </div>
            <div className="item-name">
                <h4 className="name">{props.name}</h4>
                <h6 className='station'> - {props.station}</h6>
            </div>
         
            <div className="quantity">
    <p className="on-hand">On Hand: {props.onHand} {props.onHandUnit} </p>
                <p className="par">Par: {props.par} {props.parUnit}</p>
            </div>
            <div className="buttons">
                <button 
                onClick={() => setIssue(!issue)}
                className="issue">Issue</button>
                <button
                 onClick={() =>removeItem(props.id)}
                 className="completed">Completed</button>
            </div>
        </ItemDiv>
    );
}

export default Item;
