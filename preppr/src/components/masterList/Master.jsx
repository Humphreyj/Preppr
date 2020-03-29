import React, { useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';
import Item from './Item';
import ItemForm from './ItemForm';


const Master = () => {

    const { prepItems } = useContext(PrepItemContext)
    return (
        <div>
            <h1>List for Organization Name</h1>
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
                        />
                    )
                }) : "Your List is Empty!"
            }
            <ItemForm />
        </div>
    );
}

export default Master;
