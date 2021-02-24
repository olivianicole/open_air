import React, { setState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getPosts } from '../../store/dashboard';
import './Dashboard.css';


function Dashboard() {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector((state) => {
        return state.dashboard.posts.map((postId) => state.post[postId]);
    });
    const handlePosts = async () => {
        const retrievePosts = await dispatch(getPosts());
        return retrievePosts;
    };

    useEffect(() => {
        handlePosts();
    }, []);

    if(!post){
        return null;
    };

    return(
       <div className='dash_container'>
           <div className='create_post_bar'></div>
           <div className='post'>
               <div className='username'>{post.userId}</div>
                <div className='post_title'>{post.title}</div>
                <div className='post_text'>{post.text}</div>
                <div className='post_image'>{post.image}</div>
           </div>
       </div>
    )
}

export default Dashboard;