import React from 'react';
import './SplashPage.css'

import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';
import Page6 from './page6.js';


function SplashPage (){
    
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

export default SplashPage;
