import React from 'react';
import whitelogo from '../../../assets/images/thumbnail_group.png'

const Footer = (props) => {
    return (
        <div className='footercolor'>
            <footer className='footerwrapper'>
                <div className='footerlogo'>
                    <img src={whitelogo} alt="whitelogo" />
                </div>
                <div className='footerinfo'>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        In euismod ipsum et dui 
                        rhoncus auctor.
                    </p>
                </div>
                <hr />
                <div className='footerbottom'>
                    <div className='footercopyright'>
                        <p>2020 Pewworld. All right reserved</p>
                    </div>
                    <div className='footercontactus'>
                        <p>Telephone</p>
                        <p>Email</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;