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
                <div className='option'>
                    <NavLink to='/login' className='fas fa-user-plus' style={{color: '#6294B7', textDecoration: 'none'}} activeStyle={{ color: 'white', textDecoration: 'none'}}>   log in</NavLink>
                </div>
                <div className='option'>
                    <NavLink to='/signup' className='fas fa-sign-in-alt' style={{color: '#6294B7', textDecoration: 'none'}} activeStyle={{ color: 'white', textDecoration: 'none'}}>   sign up</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className='container'>
            <div className='header'>
                <h2 className='title'>o • a</h2>
            </div>
            <div className='navBar option'>
                    <NavLink exact to='/' className='fas fa-home' style={{color: '#6294B7', textDecoration: 'none'}} activeStyle={{ color: 'white', textDecoration: 'none'}}>   dashboard</NavLink>
                    {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;