import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import * as postActions from '../../store/post.js';
import { getUsers } from '../../store/session';
import './Text.css';



function Text () {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector((state) => state.session.user);
   
    const handleSubmit = (e) => {
        e.preventDefault();

            setErrors([])

            return dispatch(postActions.makePost({ type: 'text', title, text, image: null, link: null, video: null, userId, numLikes: 0 }))
                .catch (async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        document.getElementById('text_button').toggleAttribute('disabled');
                    };
                });
    };
    
    return (
        <div className='text_div'>
            <form method='POST' action='/dashboard/text' className='text_form'>
                <div className='button_container'>
                    <NavLink to='/dashboard' className='close' >X</NavLink>
                    <button type='submit' id='text_button' className='text_button' onClick={handleSubmit} disabled={false}>post</button>
                </div>
                <div className='posting_user'>{sessionUser.username}</div>
                <input 
                    placeholder='Title' 
                    className='text_title'
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <textarea 
                    placeholder='spill it' 
                    rows='10' 
                    className='text_input' 
                    onChange={(e) => setText(e.target.value)}
                />
                <textarea placeholder='#add tags' />
                
            </form>
        </div>
    )
}

export default Text;