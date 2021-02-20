import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './profileButton';
import './Navigation.css';

function Navigation ({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        ); 
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to='/login' className='option' activeStyle={{ color: 'olive'}}>log in</NavLink>
                </li>
                <li>
                    <NavLink to='/signup' className='option' activeStyle={{ color: 'olive'}}>sign up</NavLink>
                </li>
            </>
        );
    }

    return (
        <div className='container'>
            <div className='header'>
                <h2 className='title'>o • a</h2>
            </div>
            <div className='navBar'>
                <ul>
                    <li>
                    <NavLink exact to='/' className='option'>dashboard</NavLink>
                    </li>
                    {isLoaded && sessionLinks}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;