/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import imageDefault from '../../../../assets/images/profile1.png';
import edit from '../../../../assets/images/edit.png';
import { useNavigate } from 'react-router-dom';
import FormField from '../../../utils/formfield';
import { update } from '../../../utils/formAction';
import map from '../../../../assets/images/map.png';
import API from '../../../../configs/api';
import TextField from '../../../utils/textfield';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfileRecruiters = () => {
    const [profile, setProfile] = useState({});
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState([]);
    const [recruiters, setRecruiters] = useState('');

    const [formdata, formdataHandler] = useState({
        name: {
            element: 'input',
            value: '',
            config: {
                name: 'Company name',
                type: 'text',
                placeholder: 'Enter your Company name'
            },
            validation: {
                required: true,
            }
        },
        city: {
            element: 'input',
            value: '',
            config: {
                name: 'City',
                type: 'text',
                placeholder: 'Enter your City'
            },
            validation: {
                required: true
            }
        },
        description: {
            element: 'input',
            value: '',
            config: {
                name: 'Description',
                type: 'textarea',
                placeholder: 'Enter your Description'
            },
            validation: {
                required: true
            }
        },
        instagram: {
            element: 'input',
            value: '',
            config: {
                name: 'Instagram',
                type: 'text',
                placeholder: 'Enter your Instagram'
            },
            validation: {
                required: true
            }
        },
        phone: {
            element: 'input',
            value: '',
            config: {
                name: 'Phone',
                type: 'number',
                placeholder: 'Enter your Phone number'
            },
            validation: {
                required: true
            }
        },
        linkedin: {
            element: 'input',
            value: '',
            config: {
                name: 'Linked In',
                type: 'text',
                placeholder: 'Enter your Linked in'
            },
            validation: {
                required: true
            }
        },
        position: {
            element: 'input',
            value: '',
            config: {
                name: 'Position',
                type: 'text',
                placeholder: 'Enter your Position'
            },
            validation: {
                required: true
            },
        },
    });

    const navigate = useNavigate();

    const handleGetProfile = async () => {
        try {
            const res = await API.get('/recruiters/profile');
            console.log(res, '<<<<<<<<<<<<<<<<<<<res');
            setProfile(res.data.profile);
            formdataHandler({
                ...formdata,
                name: { ...formdata.name, value: res.data.profile.name },
                position: { ...formdata.position, value: res.data.profile.position },
                city: { ...formdata.city, value: res.data.profile.city },
                phone: { ...formdata.phone, value: res.data.profile.phone },
                description: { ...formdata.description, value: res.data.profile.description },
                linkedin: { ...formdata.linkedin, value: res.data.profile.linkedin },
                instagram: { ...formdata.instagram, value: res.data.profile.instagram },
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleUpdateProfile = async () => {
        try {
            const updateData = {
                name: formdata.name.value,
                position: formdata.position.value,
                city: formdata.city.value,
                phone: formdata.phone.value,
                description: formdata.description.value,
                linkedin: formdata.linkedin.value,
                instagram: formdata.instagram.value,
            };
            const res = await API.put('/recruiters/profile', updateData);
            setRecruiters(res.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSaveButton = () => {
        handleUpdateProfile();
        navigate('/recruiters/profile');
        toast.success('Update Profile Successfully!!')
    }

    const handleCancelButton = () => {
        navigate('/recruiters/profile');
    }

    const updateForm = (element) => {
        const newFormdata = update(element, formdata);
        formdataHandler(newFormdata);
    }

    useEffect(() => {
        handleGetProfile();
    }, []);


    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    };


    const handleProfilePhoto = async () => {
        try {
            const formData = new FormData();
            formData.append('photo', imageFile);
            const res = await API.put('/recruiters/profile/photo', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setProfile(res.data.data);
            toast.success('Profile photo updated successfully!');
        } catch (error) {
            console.error(error.message);
            toast.error('Failed to update profile photo.');
        }
    };


    return (
        <div id='recruiterspages'>
            <section>
                <div className='homecolor bgedit'>
                    <div className='purplebackground'>
                        <div className='lefteditprofile'>
                            <div className='editprofilewrapper'>
                                <div className='imageprofile'>
                                    <img src={profile.photo || imageDefault} alt="imagedefault" />
                                </div>
                                <div className='uploadprofile'>
                                <button onClick={handleProfilePhoto}>Upload</button>
                                </div>
                                <div className='editprofile'>
                                    <label htmlFor='file-input'>
                                    <input
                                        id='file-input'
                                        type='file'
                                        style={{ display: 'none' }}
                                        onChange={handleImageUpload}
                                    />
                                    <img src={edit} alt="editphoto" />
                                    </label>
                                </div>
                                <div className='profiledata'>
                                    <h3>{profile.name || 'Company Name:'}</h3>
                                    <h2>{profile.position || 'Position:'}</h2>
                                    <div className='recruiterdomicile'>
                                        <img src={map} alt="mapdomicile" /><p>{profile.city || 'City:'}</p>
                                    </div>
                                </div>
                                <div className='editcontainer'>
                                    <div onClick={handleSaveButton} className='Savebutton'>
                                        Save
                                    </div>
                                    <div onClick={handleCancelButton} className='Cancelbutton'>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='righteditprofile'>
                            <div className='editformwrapper'>
                                <div className='title-form'>
                                    Personal Data
                                </div>
                                <hr />
                                <form>
                                    <FormField
                                        id={'name'}
                                        formdata={formdata.name}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'position'}
                                        formdata={formdata.position}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'city'}
                                        formdata={formdata.city}
                                        change={(element) => updateForm(element)}
                                    />
                                    <div className='descriptionform'>
                                        <TextField
                                            id={'description'}
                                            formdata={formdata.description}
                                            change={(element) => updateForm(element)}
                                            />
                                    </div>
                                    <FormField
                                        id={'instagram'}
                                        formdata={formdata.instagram}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'phone'}
                                        formdata={formdata.phone}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'linkedin'}
                                        formdata={formdata.linkedin}
                                        change={(element) => updateForm(element)}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditProfileRecruiters;
