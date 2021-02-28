import React from 'react';
import './SplashPage.css'

function Page5 (){
    
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

                <div 
                    className='textbox'
                    style={{marginRight: '80px', marginLeft: '0px'}}
                    >
                    need a place for your thoughts?
                </div>
                <div className='textbox'>
                    share photos of the dreamy vacation you took
                </div>
                <div 
                    className='textbox'
                    style={{marginRight: '2Opx'}}
                    >
                    link your favorite recipe
                </div>
                <div 
                    className='textbox'
                    style={{marginRight: '0px', marginLeft: '80px'}}
                    >    
                    *insert cute animal video here*
                </div>
            </div>
            
        </div>
    )
}

export default Page5;