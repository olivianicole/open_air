import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TextForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='title'></input>
            <textarea placeholder='what ya thinkin?'></textarea>
            <button type='submit'>post</button>
        </form>
    )
}


export default TextForm;
