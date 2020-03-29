import React from 'react';
import styled from 'styled-components';
import graphy from '../../img/graphy.svg';

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
    return (
        <Div>
            <h3>Dashboard for Organization</h3>
            <h5>Welcome, User!</h5>
            <img src={graphy} alt=""/>

            <h4>Today's Statistics</h4>
            <div className="stats-today">
                <p className="tasks-completed">Tasks Completed: 16/20</p>

                <div className="issues">
                    <h6>Issues</h6>
                   <p>There are currently no issues</p>
                </div>
            </div>
            
        </Div>
    );
}

export default Dashboard;
