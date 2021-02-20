// react functional component named LoginFormPage

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div>
            <body className='login'>
                <div className='site_title'>
                    open air
                </div>
                <form onSubmit = {handleSubmit} className='form_container'>
                    <div className='errors' style={{ visibility: errors.length === 0 ? 'hidden' : 'visible'}}>
                        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                    </div>
                    <input 
                        className='form_email'
                        type='email'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        placeholder='Email'
                        />
                    <input
                        className='form_password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                        />
                    <button type='submit' className='form_submit_button'>Log in</button>
                </form>
            </body>
        </div>
    );
}

export default LoginFormPage;