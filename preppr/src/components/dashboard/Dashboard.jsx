import React,{useContext, useEffect} from 'react';
import styled from 'styled-components';
import graphy from '../../img/graphy.svg';
import UserContext from '../../contexts/UserContext';
import PrepItemContext from '../../contexts/PrepItemContext';

const Div = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items:center;
background-color: rgba(247, 239, 239, .8);

.tasks-completed {
    font-family: 'PT Sans Caption';
    font-weight: bold;
}
.issues {
    border: 1px solid black;
    margin-bottom: 2em;
    border-radius: 5px;
    max-height: 20em;
    overflow-y: scroll;
    width: 80%;
    margin: 0 auto;
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
        
        

        button {
            font-size:.9em;
            font-weight: bold;
            height: 1.8em;
            border-radius: 5px;
            background-color: rgb(2, 201, 35);
            text-shadow: 0 0 3px #333;
            color: white;
        }
        
    
    }
}



`

const Dashboard = () => {
    const {userData} = useContext(UserContext)
    const {prepItems, taggedIssues,resolveIssue} =useContext(PrepItemContext)
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
            <h3>Dashboard for {userData.organization}</h3>
            <h5>Welcome, {userData.username}!</h5>
            <img src={graphy} alt=""/>

            <h4>Today's Statistics</h4>
            <div className="stats-today">
                <p className="tasks-completed">Tasks Completed: {tasksCompleted}/{prepItems.length}</p>

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
