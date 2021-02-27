import React from 'react';
import './SplashPage.css'
import Page1 from './SplashPage/Page1.js';
import Page2 from './SplashPage/Page2.js';
import Page3 from './SplashPage/Page3.js';
import Page4 from './SplashPage/Page4.js';
import Page5 from './SplashPage/Page5.js';
import Page6 from './SplashPage/Page6.js';

export default function SplashPage (){
    
    return (
        <div className='container'>
            <div>
                <Page1/> 
            </div>
            <div>
                <Page2/>
            </div>
            <div>
                <Page3/> 
            </div>
            <div>
                <Page4/> 
            </div>
            <div>
                <Page5/> 
            </div>
            <div>
                <Page6/> 
            </div>
        </div>
    )
}

