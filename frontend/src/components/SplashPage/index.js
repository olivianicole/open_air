import React from 'react';
import './SplashPage.css'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
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

