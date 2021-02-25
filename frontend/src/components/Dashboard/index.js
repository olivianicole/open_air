import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Text from './Text';
import Image from './Image';
import Link from './Link';
import Video from './Video';


function DashboardComponents () {

    return (
        <>
            <Dashboard />  
            
            <Switch>
                <Route path='/dashboard/text'>
                    <Text />
                    {document.body.style.overflow ='hidden'}
                </Route>
                <Route path='/dashboard/image'>
                    <Image />
                    {document.body.style.overflow ='hidden'}
                </Route>
                <Route path='/dashboard/link'>
                    <Link />
                    {document.body.style.overflow ='hidden'}
                </Route>
                <Route path='/dashboard/video'>
                    <Video />
                    {document.body.style.overflow ='hidden'}
                </Route>
            </Switch>
           
        </>
    )
}

export default DashboardComponents;