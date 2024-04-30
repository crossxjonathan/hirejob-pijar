import React from 'react';
import Logo from '../../../assets/images/thumbnail_group3.png'

const Header = (props) => {
    const login = () => {
        window.location.href = '/auth/login';
    }

    const register = () => {
        window.location.href = '/auth/register';
    }

    return (
        <header className='headerWrapper'>
            <div className='websitelogo'>
                <img src={Logo} alt="logoheader" />
            </div>
            <div className='websitenav'>
                <div onClick={login} className='loginbutton'>
                    Masuk
                </div>
                <div onClick={register} className='registerbutton'>
                    Daftar
                </div>
            </div>
        </header>
    )
}

export default Header;