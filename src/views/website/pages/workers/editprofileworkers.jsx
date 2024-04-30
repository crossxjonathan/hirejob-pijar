import React from 'react';
import cloud1 from '../../../../assets/images/cloud1.png';
import resolution from '../../../../assets/images/Group (1).png';
import size from '../../../../assets/images/expand 2.png';

import FormField from '../../../utils/formfield';

const EditProfileWorkers = () => {
    const [formdata, formdataHandler] = React.useState({
        name: {
            element: 'input',
            value: '',
            config: {
                name: 'Fullname',
                type: 'text',
                placeholder: 'Enter your name'
            },
            validation: {
                required: true,
                email: true
            }
        },
        jobdesk: {
            element: 'input',
            value: '',
            config: {
                name: 'Job desk',
                type: 'text',
                placeholder: 'Enter your job desk'
            },
            validation: {
                required: true
            }
        },
        domicile: {
            element: 'input',
            value: '',
            config: {
                name: 'Domicile',
                type: 'text',
                placeholder: 'Enter your Domicile'
            },
            validation: {
                required: true
            }
        },
        workplace: {
            element: 'input',
            value: '',
            config: {
                name: 'Workplace',
                type: 'text',
                placeholder: 'Enter your Workplace'
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
                type: 'text',
                placeholder: 'Enter your Description'
            },
            validation: {
                required: true
            }
        },
        skill: {
            element: 'input',
            value: '',
            config: {
                name: '',
                type: 'text',
                placeholder: 'Enter your Skill'
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
            }
        },
        company: {
            element: 'input',
            value: '',
            config: {
                name: 'Company name',
                type: 'text',
                placeholder: 'Enter your Company name'
            },
            validation: {
                required: true
            }
        },
        datecompany: {
            element: 'input',
            value: '',
            config: {
                name: 'Date/year',
                type: 'datetime',
                placeholder: 'ex: January 2024'
            },
            validation: {
                required: true
            }
        },
        application: {
            element: 'input',
            value: '',
            config: {
                name: 'Application name',
                type: 'text',
                placeholder: 'Enter your Application name'
            },
            validation: {
                required: true
            }
        },
        repository: {
            element: 'input',
            value: '',
            config: {
                name: 'Link repository',
                type: 'text',
                placeholder: 'Enter your Link repository'
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
        <div id='workerspages'>
            <section>
                <div className='homecolor bgedit'>
                    <div className='purplebackground'>
                        <div className='lefteditprofile'>
                            <div className='editprofilewrapper'>
                                profile
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
                                        id={'jobdesk'}
                                        formdata={formdata.jobdesk}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'domicile'}
                                        formdata={formdata.domicile}
                                        change={(element) => updateForm(element)}
                                    />
                                    <FormField
                                        id={'workplace'}
                                        formdata={formdata.workplace}
                                        change={(element) => updateForm(element)}
                                    />
                                    <div className='descriptionform'>
                                        <FormField
                                            id={'description'}
                                            formdata={formdata.description}
                                            change={(element) => updateForm(element)}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className='editSkillprofile'>
                                <div className='title-skill'>
                                    Skill
                                </div>
                                <hr />
                                <form>
                                    <div className='skillContainer'>
                                        <FormField
                                            id={'skill'}
                                            formdata={formdata.skill}
                                            change={(element) => updateForm(element)}
                                        />
                                        <div className='skill-button'>
                                            Save
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='work-experience'>
                                <div className='title-form'>
                                    Work Experience
                                </div>
                                <hr />
                                <form>
                                    <div className='workexperienceform'>
                                        <FormField
                                            id={'position'}
                                            formdata={formdata.position}
                                            change={(element) => updateForm(element)}
                                        />
                                        <div className='companyform'>
                                            <FormField
                                                id={'company'}
                                                formdata={formdata.company}
                                                change={(element) => updateForm(element)}
                                            />
                                            <FormField
                                                id={'datecompany'}
                                                formdata={formdata.datecompany}
                                                change={(element) => updateForm(element)}
                                            />
                                        </div>
                                        <div className='descriptionform'>
                                            <FormField
                                                id={'description'}
                                                formdata={formdata.description}
                                                change={(element) => updateForm(element)}
                                            />
                                        </div>
                                        <hr />
                                    </div>
                                    <div className='add-experience'>
                                        Add Work Experience
                                    </div>
                                </form>
                            </div>
                            <div className='portofolio'>
                                <div className='title-form'>
                                    Portofolio
                                </div>
                                <hr />
                                <form>
                                    <div className='portofolioform'>
                                        <FormField
                                            id={'application'}
                                            formdata={formdata.application}
                                            change={(element) => updateForm(element)}
                                        />
                                        <FormField
                                            id={'repository'}
                                            formdata={formdata.repository}
                                            change={(element) => updateForm(element)}
                                        />
                                    </div>
                                    <div className='type-portofolio'>
                                        <div className='title-portofolio'>
                                            Type portofolio
                                        </div>
                                        <div className='portofolio-radio'>
                                            <label className="aplication-mobile">
                                                <input type="radio" checked="checked" name="radio" />
                                                <span className="checkmark"></span>
                                                <p>Mobile Application</p>
                                            </label>
                                            <label className="aplication-web">
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                                <p>Web Application</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='uploadwrapper'>
                                        <div className='title-portofolio'>
                                            Upload Image
                                        </div>
                                        <div className='upload-image'>
                                            <div className='cloud'>
                                                <img src={cloud1} alt="cloud1" />
                                                <h1>Drag & Drop untuk Upload Gambar Aplikasi Mobile</h1>
                                                <p>Atau cari untuk mengupload file dari direktorimu.</p>
                                            </div>
                                            <div className='small-img'>
                                                <div className='resolution-image'>
                                                    <img src={resolution} alt="resolution" />
                                                    <p>High-Res Image PNG, JPG or GIF</p>
                                                </div>
                                                <div className='size-image'>
                                                    <img src={size} alt="size" />
                                                    <p>Size 1080x1920 or 600x800</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditProfileWorkers