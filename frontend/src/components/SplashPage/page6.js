import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

export default function Page6 (){
    
    return (
        <div className='page6'>
            <div className='site_title'>the air is open</div>
            <div className='descriptor_text'>why not speak up?</div>
            <NavLink className='button' to='/signup' >sign up</NavLink>
            <NavLink className='button' to='/login' >log in</NavLink>
        </div>
    )
}
