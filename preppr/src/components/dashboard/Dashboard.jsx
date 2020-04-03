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
div {
    width: 80%;
    margin: 1em auto;
}
.issues {
    border: 1px solid black;
}

`

const Dashboard = () => {
    const {userData} = useContext(UserContext)
    const {prepItems, taggedIssues} =useContext(PrepItemContext)
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
                    <h6>Issues</h6>
                    {taggedIssues.map(issue => {
                           return(
                               <div className="issue">
                                    <p>{issue.name}</p>
                                    <p>{issue.text}</p>
                                    <p>{issue.loggedBy}</p>
                               </div>
                            
                           )
                       })}
                </div>
            </div>
            
        </Div>
    );
}

export default Dashboard;
