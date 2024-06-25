import React from 'react';

import FormField from '../utils/formfield';

const RegisterOptions = () => {

    const RegisterRecruiters = () => {
        window.location.href = '/auth/register';
    }

    const RegisterWorker = () => {
        window.location.href = '/auth/register-recruiters';
    }

    return (
        <div id="register" className='innerWrapper'>
            <div className='title'>
                <h1>Hello, Pewpeople</h1>
            </div>
            <div className='description'>
                <p>Please choose to register your account.</p>
            </div>
            <div onClick={RegisterRecruiters} className='submitButton'>
                Register Worker
            </div>
            <div onClick={RegisterWorker} className='submitButton'>
                Register Recruiter
            </div>
        </div>
    )
}

export default RegisterOptions;