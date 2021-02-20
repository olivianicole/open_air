import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignUpForm.css';


function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        
            setErrors([]);
    
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch (async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
    };
    return (
        <div className='signup'>
            <div className='site_title'>
                    open air
            </div>
            <form onSubmit={handleSubmit} className='form_container'>
                <div className='errors'>
                    {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
                <input 
                    className='form_email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='email'
                    />
                <input 
                    className='form_password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='password'
                    />
                <input 
                    className='form_blog_name'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder='blog name'
                    />
                <button type='submit' className='form_submit_button'>Sign up</button>
            </form>
        </div>
    )
}

export default SignupFormPage;