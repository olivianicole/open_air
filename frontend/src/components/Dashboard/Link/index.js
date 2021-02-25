import './Link.css';
import { Link, NavLink } from 'react-router-dom';


function Text () {

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setErrors([]);
    
    //         return dispatch(Post.create({ email, username, password }))
    //             .catch (async (res) => {
    //                 const data = await res.json();
    //                 if (data && data.errors) setErrors(data.errors);
    //             });
    // }
    
    return (
        <div className='link_div'>
            <form method='POST' action='/dashboard/link' className='link_form'>
                <div className='button_container'>
                    <NavLink to='/dashboard' className='close'>X</NavLink>
                    <button type='submit' className='link_button'>post</button>
                </div>
                <div className='posting_user'>username</div>
                <input placeholder='Title' className='text_title' />
                <input placeholder='paste link here'></input>
                <textarea placeholder='#add tags' />
                
            </form>
        </div>

    )
    }

    export default Link;