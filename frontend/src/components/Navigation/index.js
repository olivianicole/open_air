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
                    <NavLink to='/login' className='fas fa-user-plus active' activeStyle={{ color: 'olive'}}>   log in</NavLink>
                </div>
                <div className='option'>
                    <NavLink to='/signup' className='fas fa-sign-in-alt active' activeStyle={{ color: 'olive'}}>   sign up</NavLink>
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
                    <NavLink exact to='/' className='fas fa-home active' >   dashboard</NavLink>
                    {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;