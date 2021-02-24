import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

export default function Page1 (){
    
    return (
        <div className='page1'>
            <div className='site_title'>open air</div>
            <div className='descriptor_text'>Air your thoughts, air your ideas, see what others are putting out in the open.</div>
            <button className='button'>
                <NavLink to='/signup' style={{color: 'white', textDecoration: 'none', fontFamily: 'helvetica'}}>sign up</NavLink>
            </button>
            <button className='button'>
                <NavLink to='/login' style={{color: 'white', textDecoration: 'none', fontFamily: 'helvetica'}}>log in</NavLink>
            </button>
        </div>
    )
}
