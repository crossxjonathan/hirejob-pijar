import React from 'react';
import Logo from '../../../assets/images/thumbnail_group3.png'

const Header = (props) => {
    return (
        <header className='headerWrapper'>
            <div className='websitelogo'>
                <img src={Logo} alt="logoheader" />
            </div>
            <div className='websitenav'>
                <div className='loginbutton'>
                    Masuk
                </div>
                <div className='registerbutton'>
                    Daftar
                </div>
            </div>
        </header>
    )
}

export default Header;