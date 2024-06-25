import React from 'react';
import Logo from '../../../assets/images/thumbnail_group3.png'

const Header = () => {
    const login = () => {
        window.location.href = '/auth/login';
    }

    const register = () => {
        window.location.href = '/auth/register-options';
    }

    return (
        <header className='headerWrapper'>
            <div className='websitelogo'>
                <img src={Logo} alt="logoheader" />
            </div>
            <div className='websitenav'>
                <div onClick={login} className='loginbutton'>
                    LOGIN
                </div>
                <div onClick={register} className='registerbutton'>
                    REGISTER
                </div>
            </div>
        </header>
    )
}

export default Header;