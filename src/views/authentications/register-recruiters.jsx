import React from 'react';
import axios from 'axios';
import FormField from '../utils/formfield';
import { generateData, isDataValid, update } from '../utils/formAction';
import { useNavigate } from 'react-router-dom';
import api from '../../configs/api';

const RegisterRecruiters = () => {

    const SignIn = () => {
        window.location.href = '/auth/login';
    }

    const navigate = useNavigate();
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
        company: {
            element: 'input',
            value: '',
            config: {
                name: 'Company',
                type: 'Text',
                placeholder: 'Enter your company'
            },
            validation: {
                required: true,
                email: true
            }
        },
        position: {
            element: 'input',
            value: '',
            config: {
                name: 'Position',
                type: 'Text',
                placeholder: 'Enter your position in the company'
            },
            validation: {
                required: true,
                email: true
            }
        },
        phone: {
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
            api.post('/users/register/recruiters', data)
            .then(res => {
                alert('Register Successfully!!!')
                console.log(res);
                navigate('/')
                return isvalid
            })
            .catch(error => {
                console.log('Error fetching data',error);
            })
        } else {
            console.log('data tidak valid')
        }
    }

    return (
        <div id="register" className='innerWrapper'>
            <div className='title'>
                <h1>Hello, Pewpeople</h1>
            </div>
            <div className='description'>
                <p>Please register first to enter this website.</p>
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
                    id={'company'}
                    formdata={formdata.company}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'position'}
                    formdata={formdata.position}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'phone'}
                    formdata={formdata.phone}
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
            <div className='submitButton'
            onClick={(event)=> submitForm(event)}>
                Register
            </div>
            <div className='urlButton'>
                <p>Already have account ?<span onClick={SignIn}> Sign in</span></p>
            </div>
        </div>
    )
}

export default RegisterRecruiters;