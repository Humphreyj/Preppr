import React,{useContext, useEffect} from 'react';
import styled from 'styled-components';
import Date from '../masterList/Time';
import UserContext from '../../contexts/UserContext';
import PrepItemContext from '../../contexts/PrepItemContext';

const Div = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
background-color: rgba(247, 239, 239, .8);
height: 78vh;


.tasks {
    border: 1px solid black;
    border-radius: 8px;
    width: 19em;
    font-family: 'Viga', sans-serif;
    padding:2% 0;

    .tasks-completed {
        font-family: 'PT Sans Caption';
        font-weight: bold;
    }
    .completed-task {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            p {
                margin: 0 1em;
            }
        }
        
    }
    button {
        margin-top: 1em;
        font-size:.9em;
        font-weight: bold;
        height: 1.8em;
        border-radius: 5px;
        background-color: rgb(2, 201, 35);
        text-shadow: 0 0 3px #333;
        color: white;
        margin-top: .5em
    }
}
.issues {
    border: 1px solid black;
    margin-bottom: 2em;
    border-radius: 5px;
    max-height: 10em;
    overflow-y: scroll;
    width: 19em;
    margin: 1em auto;
    padding: 2%;
    
    
    h4 {
        font-family: 'PT Sans Caption', sans-serif;
        text-decoration: underline;

    }

    .issue {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Viga', sans-serif;
        div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            p {
                margin: 0 .5em;
            }

           
        }
        
        

        button {
            font-size:.9em;
            font-weight: bold;
            height: 1.8em;
            border-radius: 5px;
            background-color: rgb(2, 201, 35);
            text-shadow: 0 0 3px #333;
            color: white;
            margin-top: .5em;
        }
        
    
    }
}



`

const Dashboard = () => {
    const {userData} = useContext(UserContext)
    const {prepItems, taggedIssues,resolveIssue,removeCompletedItem} =useContext(PrepItemContext)
    console.log(userData)
    let tasksCompleted = 0;
    prepItems.map(item => {
        if(item.completed) {
            tasksCompleted ++;
        }
    })

    useEffect(() => {
        console.log(taggedIssues)
    },[])
    return (
        <Div>
            
            <h3>Welcome, {userData.username}!</h3>
            <h4>{userData.role} at {userData.organization}</h4>
            

            <h4>Stats for <Date/></h4>
            <div className="stats-today">
                
                <div className="tasks">
                <p className="tasks-completed">Tasks Completed: {tasksCompleted}/{prepItems.length}</p>
                    {prepItems.map(item => {
                        if(item.completed) {
                            return (
                                <div className="completed-task">
                                    <div>
                                    <p>{item.name}</p>
                                    <p>{item.onHand} {item.parUnit}</p>
                                    </div>
                                    
                                </div>
                            )
                        }
                    })}
                    <button className='clear' onClick={removeCompletedItem}>Clear</button>
                </div>

                <div className="issues">
                    <h4>Issues - {taggedIssues.length}</h4>
                    {taggedIssues.map(issue => {
                           return(
                               <div className="issue">
                                    <div>
                                        <p>{issue.name}</p>
                                        <p>{issue.text}</p>
                                        <p>Logged By: {issue.loggedBy}</p>
                                    </div>
                                    <button onClick={()=>resolveIssue(issue.id)}>Resolve</button>
                               </div>
                            
                           )
                       })}
                </div>
            </div>
            
        </Div>
    );
}

export default Dashboard;
