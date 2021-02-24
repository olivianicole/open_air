import React from 'react';
import './SplashPage.css'

export default function Page5 (){
    
    return (
        <div className='page5'>
            <div className='medium_text centered'>
                air your thoughts with any of open air's four types of posts 
            </div>
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
            <div className='text_container'>

                <div className='descriptor_text textbox'>
                    need a place for your thoughts?
                </div>
                <div className='descriptor_text textbox'>
                    share photos of the dreamy vacation you took
                </div>
                <div className='descriptor_text textbox'>
                    link your favorite recipe
                </div>
                <div className='descriptor_text textbox'>
                    *insert cute animal video here*
                </div>
            </div>
            
        </div>
    )
}
