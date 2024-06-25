import React from 'react';
import FormField from '../utils/formfield';
import { generateData, isDataValid, update } from '../utils/formAction';
import { useNavigate } from 'react-router-dom';
import api from '../../configs/api';

const LoginPage = () => {
    const register = () => {
        window.location.href = '/auth/register-options';
    }

    const navigate = useNavigate();
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
            },
            valid: false,
            validationMessage: ''
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
            },
            valid: false,
            validationMessage: ''
        }
    });

    const updateForm = (event) => {
        const newFormdata = update(event, formdata);
        formdataHandler(newFormdata)
    }

    const submitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let data = generateData(formdata);
        let isvalid = isDataValid(formdata);

        if (isvalid) {
            api.post(`/users/login`, data)
            .then(res => {
                alert('Welcome!!')
                console.log(res);
                navigate('/')
                return isvalid
            })
            .catch(error => {
                alert('Your Email & Password is False, Please check again!!')
                console.log('Error fetching data',error);
            })
        } else {
            console.log('data tidak valid')
        }
    }

    return (
        <div id="login" className='innerWrapper'>
            <div className='title'>
                <h1>Hello, Pewpeople</h1>
            </div>
            <div className='description'>
                <p>Log in to find many of the best talents only here according to your needs.</p>
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
                Forget Password?
            </div>
            <div 
            className='submitButton'
            onClick={(event) => submitForm(event)}>
                Login
            </div>
            <div className='urlButton'>
                <p>You have not account?<span onClick={register}> Sign up</span></p>
            </div>
        </div>
    )
}

export default LoginPage;