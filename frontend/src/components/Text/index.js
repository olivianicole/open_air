import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, Redirect, useHistory, setState } from 'react-router-dom';
import * as dashboardActions from '../../store/dashboard.js';
import './Text.css';



function Text () {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { userId } = useParams();
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector((state) => state.session.user);
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            text, 
            userId: sessionUser.id,
        }


            setErrors([])

            return dispatch(dashboardActions.makePost(payload))
                .catch (async (res) => {
                    const data = await res.json();
                    console.log("DATA DATA", data)
                    if (!data.errors) {
                        const {posts} = this.state;
                        this.setState({posts})
                        history.push('/dashboard')
                    }
                    else setErrors(data.errors);
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