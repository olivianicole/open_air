import './Text.css';
import { NavLink } from 'react-router-dom';


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
        <div className='text_div'>
            <form method='POST' action='/dashboard/text' className='text_form'>
                <div className='button_container'>
                    <NavLink to='/dashboard' className='close'>X</NavLink>
                    <button type='submit' className='text_button'>post</button>
                </div>
                <div className='posting_user'>username</div>
                <input placeholder='Title' className='text_title' />
                <textarea placeholder='spill it' rows='10' className='text_input' />
                <textarea placeholder='#add tags' />
                
            </form>
        </div>
    )
}

export default Text;