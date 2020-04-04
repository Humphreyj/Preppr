import React,{ useState, useContext } from 'react';
import styled from 'styled-components';
import PrepItemContext from '../../contexts/PrepItemContext';

const Div = styled.div`
background-color: rgba(247, 239, 239, .8);
font-family: 'PT Sans Caption', sans-serif;

.toggle-title {
    cursor: pointer;
}
.form-open {
    display: flex;
    flex-direction: column;
    input { 
        width: 80%;
        height: 1.6em;
        margin: .6em auto;
    }
    div {
        display: flex;
        flex-direction: column;
        
        select {
            width: 60%;
            height: 2em;
            margin: .2em auto;
        }
    }
    button {
        width: 40%;
        margin: .6em auto;
        font-size: 1.3em;
        font-family: 'Viga', sans-serif;
    }
}

.form-closed {
    display: none;
}

`

const ItemForm = () => {
    const {addItem} = useContext(PrepItemContext)
    const [newItem,setNewItem] = useState({
        id: Date.now(),
        name: '',
        station: '',
        onHand: '',
        onHandUnit: '',
        par: '',
        parUnit: '',
        unit: '',
        completed: false,
        issue: false

    })

    const changeHandler = e => {
        setNewItem({...newItem,[e.target.name] : e.target.value})
    }

    const [addingItem,setAddingItem] = useState(false)

    const submitHandler = e => {
        e.preventDefault();
        addItem(newItem)
        console.log(newItem)
        setNewItem({
            id: Date.now(),
            name: '',
            station: '',
            onHand: '',
            onHandUnit: '',
            par: '',
            parUnit: '',
            unit: '',
            completed: false,
            issue: false
        })
    }
    return (
        <Div>
            <h4 
            onClick={()=>setAddingItem(!addingItem)}
            className='toggle-title'>{addingItem ? "Cancel": "Add a new Item" }</h4>
            <form className={addingItem ? 'form-open': 'form-closed'} onSubmit={submitHandler}>
                
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
