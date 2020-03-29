import React,{ useState, useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';

const Div = styled.div`

`

const ItemForm = () => {
    const {prepItems,addItem} = useContext(PrepItemContext)
    const [newItem,setNewItem] = useState({
        id: prepItems.length +1,
        name: '',
        station: '',
        onHand: '',
        onHandUnit: '',
        par: '',
        parUnit: '',
        unit: '',
        completed: false,

    })

    const changeHandler = e => {
        setNewItem({...newItem,[e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        addItem(newItem)
        console.log(newItem)
    }
    return (
        <Div>
            <form onSubmit={submitHandler}>
                <h4>Add a new Item</h4>
                <input 
                name='name'
                placeholder='Item Name'
                value={newItem.name}
                onChange={changeHandler}
                type="text"/>

                <input 
                name='station'
                placeholder='Station'
                value={newItem.station}
                onChange={changeHandler}
                type="text"/>

                <div className="itemOnHand">
                    
                    <input 
                    name='onHand'
                    placeholder='On Hand'
                    value={newItem.onHand}
                    onChange={changeHandler}
                    type="number"/>

                    <select 
                    name="onHandUnit"
                    value={newItem.onHandUnit}
                    onChange={changeHandler}
                    >
                    <option value="Cup">Cup</option>
                    <option value="Pint">Pint</option>
                    <option value="Quart">Quart</option>
                        
                    </select>
                </div>
                {/* item on hand */}

                <div className="itemPat">
                    <input 
                    name='par'
                    placeholder='Par'
                    value={newItem.par}
                    onChange={changeHandler}
                    type="number"/>
                    
                    <select 
                    name="parUnit"
                    value={newItem.parUnit}
                    onChange={changeHandler}
                    >
                        <option value="Cup">Cup</option>
                        <option value="Pint">Pint</option>
                        <option value="Quart">Quart</option>
                        
                    </select>
                </div>
                {/* Item par */}
                
                <button>Add To List</button>
            </form>
            
        </Div>
    );
}

export default ItemForm;
