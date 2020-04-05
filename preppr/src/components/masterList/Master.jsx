import React, { useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';
import Item from './Item';
import ItemForm from './ItemForm';
import UserContext from '../../contexts/UserContext';

const Div = styled.div`
min-height: 78vh;
background-color: rgba(247, 239, 239, .8);
margin-top: -1.4em;
font-family: 'PT Sans Caption', sans-serif;
`


const Master = () => {

    const { prepItems } = useContext(PrepItemContext)
    const { userData } = useContext(UserContext);
    return (
        <Div>
            <h1>{userData.organization}</h1>
            {
               prepItems && prepItems.length > 0 ? prepItems.map(item => {
                    return (
                        <Item
                        id={item.id} 
                        name={item.name}
                        onHand={item.onHand}
                        par={item.par}
                        parUnit={item.parUnit}
                        onHandUnit={item.onHandUnit}
                        station={item.station}
                        completed={item.completed}
                        issue={item.issue}
                        />
                    )
                }) : "Your List is Empty!"
            }
            <ItemForm />
        </Div>
    );
}

export default Master;
