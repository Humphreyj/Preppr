import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;
border-radius: 5px;
width: 15em;
padding: 2%;
margin-top: 1em;

div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
        margin: .5em 1em;
    }
}

`

const StaffMember = (props) => {
    return (
        <Div>
            <div>
                <p className="name">{props.name}</p>
                <p>{props.role}</p>
            </div>
            <div className="stations">
                {props.trainedOn.map(station => {
                    return (
                        <p>{station}</p>
                    )
                })}
            </div>
            
        </Div>
    );
}

export default StaffMember;
