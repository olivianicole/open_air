import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

export default function Page6 (){
    
    return (
        <div className='page6'>
            <div className='site_title'>the air is open</div>
            <div className='descriptor_text'>why not speak up</div>
            <button className='button'>
                <NavLink to='/signup' style={{color: 'white', textDecoration: 'none', fontFamily: 'georgia'}}>sign up</NavLink>
            </button>
            <button className='button'>
            <NavLink to='/login' style={{color: 'white', textDecoration: 'none', fontFamily: 'georgia'}}>log in</NavLink>
            </button>
        </div>
    )
}
