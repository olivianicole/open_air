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
            <>
                <div className='navBar option'>
                    <NavLink exact to='/dashboard' className='fas fa-home' style={{color: 'white', textDecoration: 'none'}} activeStyle={{ color: '#a2cbe8', textDecoration: 'none'}}></NavLink>
                </div>
                <ProfileButton user={sessionUser} />
            </>
        )
    } else {
        sessionLinks = (
            <>
                <div className='option'>
                    <NavLink exact to='/' className='fas fa-home' style={{color: 'white', textDecoration: 'none'}} activeStyle={{ color: '#a2cbe8', textDecoration: 'none'}}></NavLink>
                </div>
                <div className='option'>
                    <NavLink to='/login' style={{color: 'white', textDecoration: 'none'}} activeStyle={{ color: '#a2cbe8', textDecoration: 'none'}}>   log in</NavLink>
                </div>
                <div className='option'>
                    <NavLink to='/signup' style={{color: 'white', textDecoration: 'none'}} activeStyle={{ color: '#a2cbe8', textDecoration: 'none'}}>   sign up</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className='header'>
            <div className='title'>o • a</div>
            {isLoaded && sessionLinks}
        </div>
            
        
    );
}
export default Navigation;