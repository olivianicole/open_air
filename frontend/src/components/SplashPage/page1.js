import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

function Page1 (){
    
    return (
        <div className='page1'>
            <div className='site_title'>open air</div>
            <div className='descriptor_text'>Air your thoughts, air your ideas, see what others are putting out in the open.</div>
            <NavLink className='splash_button' to='/signup' >sign up</NavLink>
            <NavLink className='splash_button' to='/login' >log in</NavLink>
        </div>
    )
}

export default Page1;