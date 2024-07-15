/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import map from '../../../../assets/images/map.png';
import imageDefault from '../../../../assets/images/profile1.png';
import portfoliodefault from '../../../../assets/images/Rectangle 641.png';
import experiencedefault from '../../../../assets/images/office-center.png';
import { useNavigate } from 'react-router-dom';
import API from '../../../../configs/api';

const WorkersProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('portfolio');
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleEditProfile = () => {
    navigate('/workers/editprofile');
  }

  const getSkills = async () => {
    try {
      const res = await API.get('/skills');
      setSkills(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getPortfolio = async () => {
    try {
      const res = await API.get('/portfolio');
      setPortfolio(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  const getExperience = async () => {
    try {
      const res = await API.get('/experience');
      setExperience(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getProfile = async () => {
    try {
      const res = await API.get('/workers/profile');
      setProfile(res.data.profile);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProfile();
    getSkills();
    getPortfolio();
    getExperience();
  }, [])

  return (
    <div id='workerspages'>
      <section>
        <div className='homecolor'>
          <div className='workerscontainer'>
            <div className='rectanglepurple'>
            </div>
            <div className='workerswrapper'>
              <div className='RectangleWhiteLeft'>
                <div className='personalProfile'>
                  <div className='imageprofile'>
                    <img src={profile.photo || imageDefault} alt="imagedefault" />
                  </div>
                  <div className='profiledata'>
                    <h3>{profile.name || 'Name:'}</h3>
                    <h2>{profile.job_desk || 'Job:'}</h2>
                    <div className='domicilemap'>
                      <img src={map} alt="mapdomicile" />
                      <p>{profile.domicile || 'Domicile:'}</p>
                    </div>
                    <p>{profile.workplace || 'Workplace:'}</p>
                    <p>{profile.description || 'Description:'}</p>
                  </div>
                  <div onClick={handleEditProfile} className='EditButton'>
                    Edit Profile
                  </div>
                  <div>
                    <h3>Skill</h3>
                    <div className='skillContainer'>
                      {skills.length > 0 ? (
                        skills.map((item) => (
                          <div key={item.id} className='yellowSkill'>
                            <p>{item.skill_name}</p>
                          </div>  
                        ))
                      ) : (
                        <p>Skill Unavailable</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='RectangleWhiteRight'>
                <div className='titlePortfolio'>
                  <div className={`portfolio ${activeTab === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveTab('portfolio')}>
                    <h3 className={activeTab === 'portfolio' ? 'active' : ''}>Portfolio</h3>
                    <hr className={`underline ${activeTab === 'portfolio' ? 'active' : ''}`} />
                  </div>
                  <div className={`experience ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
                    <h3 className={activeTab === 'experience' ? 'active' : ''}>Experience</h3>
                    <hr className={`underline ${activeTab === 'experience' ? 'active' : ''}`} />
                  </div>
                </div>
                <div className='content'>
                  {activeTab === 'portfolio' ? (
                    <div className='portfolio-container'>
                      {portfolio.length > 0 ? (
                        portfolio.map((item) => (
                          <div key={item.id} className='portfolio-content'>
                            <img src={item.upload_image || portfoliodefault} alt="portfoliodefault" />
                            <p>{item.application_name}</p>
                          </div>
                        ))
                      ) : (
                        <p>No portfolio available</p>
                      )}
                    </div>
                  ) : (
                    <div className='experience-container'>
                      {experience.length > 0 ? (
                        experience.map((item) => (
                          <div key={item.id} className='experience-content'>
                            <img src={experiencedefault} alt="experiencedefault" />
                            <div className='sub-experience'>
                              <h1>{item.position}</h1>
                              <h3>{item.company_name}</h3>
                              <h2>{item.month_company} {item.year_company}</h2>
                              <p>{item.description_company}</p>
                            </div>
                          </div>  
                        ))
                      ) : (
                        <p>Experience Unavailable</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkersProfile;
