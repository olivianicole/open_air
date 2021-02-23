import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './SplashPage.css'

export default function Page5 (){
    
    return (
        <div className='page5'>
            <div className='icon_container'>
                <div className='post_icon'>
                    <i class="fas fa-paragraph"></i>
                </div>
                <div className='post_icon'>
                    <i class="far fa-images"></i>
                </div>
                <div className='post_icon'>
                    <i class="fas fa-link"></i>
                </div>
                <div className='post_icon'>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div className='medium_text'>
                air your thoughts with any of open air's four types of posts 
            </div>
            <div className='medium_text_white'>
                including: text, image, link, and video 
            </div>
            
        </div>
    )
}
