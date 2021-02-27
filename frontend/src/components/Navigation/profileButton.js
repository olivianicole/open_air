import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            <button className='logout_button' onClick={openMenu}>account
                {/* <i className='fas fa-user-circle logout_button_option' /> */}
            </button>
            {showMenu && (
                <div className='logout_container'>
                    <div className='user_info'>
                        <div className='logout_list'>   {user.username}</div>
                        <div className='logout_list'>   {user.email}</div>
                    </div>

                    <button className='logout_button' onClick={logout}>log out</button>
                   
                </div>
            )}
        </>
    );
}

export default ProfileButton;