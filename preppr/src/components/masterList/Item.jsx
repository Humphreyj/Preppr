import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';
import UserContext from '../../contexts/UserContext';

const ItemDiv = styled.div`
z-index: 100;
position: relative;
background-color: rgba(247, 239, 239, .8);
padding: 2%;



.item-content {
    background-color: rgba(242, 242, 242, .8);
    box-shadow: 0 0 1em #333;
    border-radius: 6px;


    .item-name {
        font-family: 'PT Sans Caption', sans-serif;
        display: flex;
        justify-content: center;
        .station {
            margin-left: 1em;
        }
    }
    

    .issue-text {
        color: red;
        text-shadow: 1px 1px 1px #111;
    }
    .quantity {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
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
    
    
}
.buttons {
    width: 40%;
    margin: 1em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .issue {
        background-color: rgb(252, 70, 70);
        color: white;
        text-shadow: 0 0 4px black;
    }
    .completed {
        background-color: rgb(2, 201, 35);
        color: white;
        text-shadow: 0 0 4px black;
    }
    


    button {
        font-family: 'Viga', sans-serif;
        border-radius: 6px;
        background-color: rgb(219, 219, 219);
        font-size: 1.1em;
    }

}

.task-complete {
    opacity: .7;
    background-color: rgb(2, 201, 35);
    text-shadow: 0 0 3px #333;
    color: white;

}

`

const Item = (props) => {
    const {prepItems,setPrepItem,removeItem} = useContext(PrepItemContext)

    const { userData } = useContext(UserContext)
    const [issue, setIssue] = useState(false)
    const [issueMessage, setIssueMessage] = useState({
        text: ''
    })

    const changeHandler = e => {
        setIssueMessage({...issueMessage,[e.target.name]: e.target.value})
    }

    const [issueSubmitted, setIssueSubmitted] = useState(false)
    const submitIssue = () => {
        setIssue(false)
        setIssueSubmitted(true)
    }

    const resolveIssue = () => {
        setIssue(false);
        setIssueSubmitted(false);
    }

   


    const [completed, setCompleted] = useState(false)

    
    return (
        <ItemDiv>
            <div className={props.completed ? "item-content task-complete" : "item-content"}>
                <div className={!issue ? 'closed': 'modal'}>
                <h4 className="name">{props.name}</h4>
                <h6>Submit Issue</h6>
                <select 
                name="text" 
                value={issueMessage.text}
                onChange={changeHandler}>
                    <option value='none'>Choose One</option>
                    <option value="No Product">No Product</option>
                    <option value="Busy Service">Busy Service</option>
                    <option value="Other">Other</option>
                </select>
            
                <button 
                onClick={submitIssue}
                className="submit-issue">Submit</button>
                <button 
                onClick={resolveIssue}
                className="resolve">Resolve</button>
                </div>
                {/* MODAL */}
                <div className="item-name">
                    <h4 className="name">{props.name}</h4>
                    <h6 className='station'> - {props.station}</h6>
                </div>
    {issueSubmitted ? <h4 className ='issue-text'>ISSUE SUBMITTED BY {userData.username} - {issueMessage.text}</h4> : '' }
    {props.completed ? <h4 className='completed-by'>Completed by: {userData.username}</h4> : ''}
                <div className="quantity">
                    <p className="on-hand">On Hand: {props.onHand} {props.onHandUnit} </p>
                    <p className="par">Par: {props.par} {props.parUnit}</p>
                </div>
                
            </div>

            <div className="buttons">
                    {props.completed ? <button 
                    onClick={() => setIssue(!issue)}
                    className="issue" disabled >Issue</button> : <button 
                    onClick={() => setIssue(!issue)}
                    className="issue" >Issue</button>}
                    
                    {issueSubmitted ? <button
                    onClick={() =>removeItem(props.id)}
                    className="completed" disabled>{completed ? "Undo" : "Complete"}</button> : <button
                    onClick={() =>removeItem(props.id)}
                    className="completed">{completed ? "Undo" : "Complete"}</button>}
                </div>
            
        </ItemDiv>
    );
}

export default Item;
