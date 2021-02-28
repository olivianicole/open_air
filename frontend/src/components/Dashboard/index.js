import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, Link } from 'react-router-dom';
import { getPosts } from '../../store/dashboard';
import './Dashboard.css';


function Dashboard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        <Redirect to='/' />
    }



    const posts = useSelector((state) => {
        return state.dashboard;
    });

    console.log('POSTSSSSSS', posts);
    const handlePosts = async () => {
        const retrievePosts = await dispatch(getPosts());
        return retrievePosts;
    };

    // const handleUsers = async () => {
    //     const retrieveUsers = await dispatch(getUsers());
    //     return retrieveUsers;
    // };    
    
    useEffect(() => {
        handlePosts();
        // handleUsers();
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
                    <div className='post_and_sidebar_container'>
                        <div className='post_stack'>
                    {posts?.map((post) => (
                            <div className='post' >
                                <div className='user_info'>
                                    <NavLink to='/profile/username' className='username_button'>{post.User.username}</NavLink>
                                    <button className='follow_button'>follow</button>
                                    {/* { sessionUser.id === post.userId &&
                                        <div>

                                            <button 
                                            onClick={() => this.deletePost(post)}
                                            className='post_delete_button'>
                                                delete
                                            </button>
                                            <Link
                                            to={`/dashboard/${post.type}/${post.id}`}>

                                            </Link>
                                        </div>
                                    } */}
                                </div>
                                {post.image && <img src={post.image} className='post_image' />}
                                <div className='post_title'>{post.title}</div>
                               
                                {post.link && 
                                
                                    <a href={post.link} className='posted_url'>
                                        {post.link}
                                    </a>
                                
                                }
                                         
                                <div className='post_text'>{post.text}</div>
                            </div>
                    ))}
           </div>
                         <div className='sidebar'>
                            <div className='sidebar_title'>check out these blogs</div>
                            <div className='sidebar_bar'>_______________________________________</div>
                            <div className='sidebar_blog_info'>
                                <div className='sidebar_user_chunk'>
                                    <img src='https://image.flaticon.com/icons/png/512/110/110261.png' className='sidebar_prof_pic' />
                                    <div className='sidebar_username'>coffeeluver</div>
                                    <button type='button' className='sidebar_follow_button'>follow</button>
                                </div>
                                <div className='sidebar_user_chunk'>
                                <img src='https://img.icons8.com/emoji/452/butterfly-emoji.png' className='sidebar_prof_pic' />
                                    <div className='sidebar_username'>butterfly__</div>
                                    <button type='button' className='sidebar_follow_button'>follow</button>
                                </div>
                                <div className='sidebar_user_chunk'>
                                <img src='https://image.flaticon.com/icons/png/512/1587/1587561.png' className='sidebar_prof_pic' />
                                    <div className='sidebar_username'>plantmom</div>
                                    <button type='button' className='sidebar_follow_button'>follow</button>
                                </div>
                            </div>
                            {/* <div className='sidebar_explore_link'>explore even more</div> */}
                        <div className='sidebar_spot'>spotlight</div>
                            <div className='sidebar_bar'>_______________________________________</div>
                            <div className='sidebar_spotlight_post'>
                                <div className='user_info'>
                                    <div className='username_button'>helloWorld</div>
                                    <button className='follow_button'>follow</button>
                                </div>
                                <img src='https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes.jpg' className='sidebar_spotlight_image' />
                                <div className='post_title'>literally</div>
                                <div className='post_text'>my_life</div>
                            </div>

                    </div>
                 </div>
            </div>
        )

    
}

export default Dashboard;


{/* <div className='post' >
                                <div className='user_info'>
                                    <NavLink to='/profile/username' className='username_button'>{post.User.username}</NavLink>
                                    <button className='follow_button'>follow</button>
                                
                                </div>
                                {post.image && <img src={post.image} className='post_image' />}
                                <div className='post_title'>{post.title}</div>
                               
                                {post.link && 
                                
                                    <a href={post.link} className='posted_url'>
                                        {post.link}
                                    </a> */}