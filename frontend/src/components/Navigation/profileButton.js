import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
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
    };

    return (
        <>
            <button className='logout_button option' onClick={openMenu}>
                <i className='fas fa-user-circle' />
            </button>
            {showMenu && (
                <div className='logout_container'>
                    <div className='user_info'>
                        <div className='logout_list'>   {user.username}</div>
                        <div className='logout_list'>   {user.email}</div>
                    </div>
                    <div>
                        <button className='logout_button' onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;