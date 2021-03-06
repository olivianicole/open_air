import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

function Page6 (){
    
    return (
        <div className='page6'>
            <div className='site_title'>the air is open</div>
            <div className='descriptor_text'>why not speak up?</div>
            <NavLink className='splash_button' to='/signup'>sign up</NavLink>
            <NavLink className='splash_button' to='/login'>log in</NavLink>
        </div>
    )
}

export default Page6;