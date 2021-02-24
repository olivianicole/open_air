import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

export default function Page6 (){
    
    return (
        <div className='page6'>
            <div className='site_title'>the air is open</div>
            <div className='descriptor_text'>why not speak up?</div>
            <button className='button'>
                <NavLink to='/signup' style={{color: 'white', textDecoration: 'none', fontFamily: 'helvetica'}}>sign up</NavLink>
            </button>
            <button className='button'>
                <NavLink to='/login' style={{color: 'white', textDecoration: 'none', fontFamily: 'helvetica'}}>log in</NavLink>
            </button>
        </div>
    )
}
