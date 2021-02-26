import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../store/dashboard';
import './Dashboard.css';


function Dashboard() {
    const dispatch = useDispatch();

    const posts = useSelector((state) => {
        return state.dashboard;
    });

    console.log('POSTSSSSSS', posts);
    const handlePosts = async () => {
        const retrievePosts = await dispatch(getPosts());
        return retrievePosts;
    };

    useEffect(() => {
        handlePosts();
    }, []);
    
        return(
           <div className='dash_container' id='dash_container'>
               <div className='create_post_bar'>
                   <div className='create_post_container'>
                        <NavLink to='/dashboard/text' className='post_link'>t e x t</NavLink>
                   </div>
                   <div className='create_post_container'>
                        <NavLink to='/dashboard/image' className='post_link'>i m a g e</NavLink>
                   </div>
                   <div className='create_post_container'>
                        <NavLink to='/dashboard/link' className='post_link'>l i n k</NavLink>
                   </div>
                   <div className='create_post_container'>
                        <NavLink to='/dashboard/video' className='post_link'>v i d e o</NavLink>
                   </div>
               </div>
                    {posts?.map((post) => (
                            <div className='post' >
                                <div className='user_info'>
                                    <NavLink to='/profile/username' className='username_button'>{post.User.username}</NavLink>
                                    <button className='follow_button'>follow</button>
                                </div>
                                {post.image && <img src={post.image} className='post_image' />}

                                <div className='post_title'>{post.title}</div>
                                {post.link &&   <div className='posted_url' >
                                                {post.link}
                                                    <a href={post.link} />
                                                </div>}
                                <div className='post_text'>{post.text}</div>
                            </div>
                    ))}
           </div>
        )

    
}

export default Dashboard;