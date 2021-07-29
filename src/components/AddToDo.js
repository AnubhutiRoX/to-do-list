import {useState} from 'react';

// TODO: clear text box not working
// TODO: add should be disabled incase of empty textbox
export const AddToDo = ({onAdd}) => {
    
    const [inputItem, setInputItem] = useState('');
    const submitHandler = () => {
        onAdd(inputItem);
        setInputItem('');
    }

    return (
        <>
            <input 
                placeholder='Please add item'
                type='text' 
                onChange={(e) => {setInputItem(e.target.value)}}
                />
            <button type='submit' onClick={submitHandler} >Add</button>
        </>
    )
}