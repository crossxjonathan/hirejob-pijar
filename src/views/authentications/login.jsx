import React from 'react';

import FormField from '../utils/formfield';

const LoginPage = () => {

    const [formdata, formdataHandler] = React.useState({
        email: {
            element: 'input',
            value: '',
            config: {
                name: 'Email',
                type: 'email',
                placeholder: 'Enter your email'
            },
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            element: 'input',
            value: '',
            config: {
                name: 'Password',
                type: 'password',
                placeholder: 'Enter your password'
            },
            validation: {
                required: true
            }
        }
    });

    const updateForm = (event) => {

    }

    const submitForm = (event) => {

    }

    return (
        <div id="login" className='innerWrapper'>
            <div className='title'>
                <h1>Halo, Pewpeople</h1>
            </div>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <form onSubmit={(event) => submitForm(event)}>
                <FormField
                    id={'email'}
                    formdata={formdata.email}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'password'}
                    formdata={formdata.password}
                    change={(element) => updateForm(element)}
                />
            </form>
            <div className='forgetButton'>
                Lupa kata sandi?
            </div>
            <div className='submitButton'>
                Masuk
            </div>
            <div className='urlButton'>
                <p>Anda belum punya akun?<span> Daftar disini</span></p>
            </div>
        </div>
    )
}

export default LoginPage;