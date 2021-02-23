import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './SplashPage.css'

export default function Page1 (){
    
    return (
        <div className='page1'>
            <div className='site_title'>open air</div>
            <div className='descriptor_text'>Air your thoughts, air your ideas, see what others are putting out in the open.</div>
            <button className='nav_button'>sign up</button>
            <button className='nav_button'>log in</button>
        </div>
    )
}
