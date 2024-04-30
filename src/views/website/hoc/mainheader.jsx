import React from 'react';
import Logo from '../../../assets/images/thumbnail_group3.png'

const MainHeader = (props) => {

    return (
        <header className='mainHeaderWrapper'>
            <div className='mainwebsitelogo'>
                <img src={Logo} alt="logoheader" />
            </div>
            <div className='mainwebsitenav'>
                <div className='notification'>
                    notif
                </div>
                <div className='email'>
                    mail
                </div>
                <div className='profile'>
                    profile
                </div>
                <div className='logout'>
                    log out
                </div>
            </div>
        </header>
    )
}

export default MainHeader;