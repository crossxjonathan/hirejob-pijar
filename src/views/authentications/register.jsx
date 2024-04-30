import React from 'react';

import FormField from '../utils/formfield';

const RegisterPage = () => {
    const login = () => {
        window.location.href = '/auth/login';
    }

    const [formdata, formdataHandler] = React.useState({
        name: {
            element: 'input',
            value: '',
            config: {
                name: 'Name',
                type: 'text',
                placeholder: 'Enter your name'
            },
            validation: {
                required: true
            }
        },
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
        nohandphone: {
            element: 'input',
            value: '',
            config: {
                name: 'No Handphone',
                type: 'text',
                placeholder: 'Enter your phone number'
            },
            validation: {
                required: true
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
        },
        confirmpassword: {
            element: 'input',
            value: '',
            config: {
                name: 'Confirm Password',
                type: 'password',
                placeholder: 'Confirm your password'
            },
            validation: {
                required: true
            }
        }
    });

    return (
        <div id="register" className='innerWrapper'>
            <div className='title'>
                <h1>Halo, Pewpeople</h1>
            </div>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <form onSubmit={(event) => submitForm(event)}>
                <FormField
                    id={'name'}
                    formdata={formdata.name}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'email'}
                    formdata={formdata.email}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'nohandphone'}
                    formdata={formdata.nohandphone}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'password'}
                    formdata={formdata.password}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'confirmpassword'}
                    formdata={formdata.confirmpassword}
                    change={(element) => updateForm(element)}
                />
            </form>
            <div className='submitButton'>
                Daftar
            </div>
            <div className='urlButton'>
                <p>Anda sudah punya akun?<span onClick={login}> Masuk disini</span></p>
            </div>
        </div>
    )
}

export default RegisterPage;