import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory} from 'react-router-dom';
import * as dashboardActions from '../../store/dashboard.js';

import './Image.css';



function Image () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const [image, setImage] = useState(null);
    const sessionUser = useSelector((state) => state.session.user);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const payload = {
            title,
            text,
            userId: sessionUser.id,
            image,
        }

        setErrors([]);

        dispatch(dashboardActions.postImage(payload))

        history.push('/dashboard');
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) setImage(file);
    };
    
    return (
        <div className='text_div'>
            <form method='POST' action='/dashboard/text' className='text_form'>
                <div className='button_container'>
                    <NavLink to='/dashboard' className='close' >X</NavLink>
                    <button type='submit' id='text_button' className='text_button' onClick={handleSubmit} >post</button>
                </div>
                <div className='posting_user'>{sessionUser.username}</div>
                <input 
                    placeholder='Title' 
                    className='text_title'
                    onChange={(e) => setTitle(e.target.value)}
                 />
                 <input className='image_upload' type="file" onChange={updateFile} />
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

export default Image;
