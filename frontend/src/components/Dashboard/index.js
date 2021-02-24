import React, { setState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useParams } from 'react-router-dom';

import { getPosts } from '../../store/dashboard';
import './Dashboard.css';


function Dashboard() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        console.log('STATE', state);
        return state.dashboard;
    });
    const handlePosts = async () => {
        const retrievePosts = await dispatch(getPosts());
        return retrievePosts;
    };

    useEffect(() => {
        handlePosts();
    }, []);

    if(!posts){
        return null;
    };

    return(
       <div className='dash_container'>
           <div className='create_post_bar'>create a post!</div>
                {posts.map((post) => (
                        <div className='post' key={post.id}>
                            <div className='user_info'>
                                <div className='post_username'>{post.User.username}</div>
                                <button className='follow_button'>follow</button>
                            </div>
                            <img src={post.image} className='post_image' />
                            <div className='post_title'>{post.title}</div>
                            <div className='post_text'>{post.text}</div>
                        </div>
                ))}
       </div>
    )
}

export default Dashboard;