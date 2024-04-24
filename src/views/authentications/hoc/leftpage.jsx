import React from 'react';

import logo from '../../../assets/images/thumbnail_group.png';

const LeftPage = () => {
    return (
        <div className='leftWrapper'>
            <div className='pagecontainer'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div>
                    <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
            </div>
        </div>
    )
}

export default LeftPage;