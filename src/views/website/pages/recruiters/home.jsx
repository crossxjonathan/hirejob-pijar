/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import searchicon from '../../../../assets/images/search.png';
import API from '../../../../configs/api';
import imageDefault from '../../../../assets/images/profile1.png';
import map from '../../../../assets/images/map.png';
import { useNavigate } from 'react-router-dom';

const HomeRecruiters = () => {
    const [searchValue, setSearchValue] = useState('');
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [category, setCategory] = useState('name');
    const [sortBy, setSortBy] = useState('A-Z');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [skills, setSkills] = useState({});
    const [detail, setDetail] = useState({});

    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchWorkers(searchValue, category);
    };

    const fetchWorkers = (search = '', sortby = 'name', page = 1, sortOrder = 'A-Z') => {
        setLoading(true);
        setError('');

        API.get('/workers', {
            params: {
                limit: 5,
                page: page,
                sort: sortOrder,
                sortby,
                search
            }
        })
            .then(res => {
                console.log(res.data);
                setTotalPages(res.data.totalPages);
                setWorkers(res.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    };

    const GetSkillById = async (id) => {
        try {
            const res = await API.get(`/skills/${id}`);
            setSkills(prevSkills => ({
                ...prevSkills,
                [id]: res.data.data
            }));
            console.log(res, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>res');
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    }

    useEffect(() => {
        fetchWorkers();
    }, []);

    useEffect(() => {
        workers.forEach(worker => {
            GetSkillById(worker.id);
        });
    }, [workers]);

    const handleCategoryClick = (category) => {
        setCategory(category);
        fetchWorkers(searchValue, category, currentPage, sortBy);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
        fetchWorkers(searchValue, category, page, sortBy);
    };

    const handleSortClick = (order) => {
        setSortBy(order);
        fetchWorkers(searchValue, category, currentPage, order);
    };


    return (
        <div id='workerspages'>
            <div className='homecolor'>
                <section>
                    <div className='topjob'>
                        <p>Top Job</p>
                    </div>
                    <div className='containerHome'>
                        <form className='searchwrapper' onSubmit={handleSearchSubmit}>
                            <div className='searchinput'>
                                <input
                                    type="search"
                                    placeholder='Search for any skill'
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div className='searchright'>
                                <div className='searchicon'>
                                    <img src={searchicon} alt="searchicon" />
                                </div>
                                <div className='category'>
                                    Category
                                    <div className='subcategory'>
                                        <div className='subcategorycontent'>
                                            <a href="#" onClick={() => handleCategoryClick("name")}>name</a>
                                            <a href="#" onClick={() => handleSortClick("A-Z")}>A - Z</a>
                                            <a href="#" onClick={() => handleSortClick("Z-A")}>Z - A</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='searchbutton' onClick={handleSearchSubmit}>
                                    Search
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section>
                    <div className='containerHome'>
                        <div className='tablewrapper'>
                            {loading ? (
                                <div className='containerLoading'>
                                    <p>Loading....</p>
                                </div>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                workers.map(worker => (
                                    <div key={worker.id} className='cardHome'>
                                        <div className='subLeftCard'>
                                            <div>
                                                <img className='cardImage' src={worker.photo || imageDefault} alt="Profile" />
                                            </div>
                                            <div className='profile-data'>
                                                <h3>{worker.name || 'Name:'}</h3>
                                                <p>{worker.job_desk || 'Job:'}</p>
                                                <div className='domicile'>
                                                    <img src={map} alt="domicileCard" />
                                                    <p>{worker.domicile || 'Domicile:'}</p>
                                                </div>
                                                <div className='skillContainer'>
                                                    {skills[worker.id] ? skills[worker.id].map(skill => (
                                                        <div key={skill.id} className='yellowSkill'>
                                                            <p>{skill.skill_name}</p>
                                                        </div>
                                                    )) : <p>Skills: Not Available</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={() => navigate(`/recruiters/detail/${worker.id}`)} className='subRightCard'>
                                            View Profile
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='pagination'>
                        <a href="#" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</a>
                        {[...Array(totalPages)].map((_, index) => (
                            <a
                                key={index}
                                href="#"
                                className={index + 1 === currentPage ? "active" : ""}
                                onClick={() => handlePageClick(index + 1)}
                            >
                                {index + 1}
                            </a>
                        ))}
                        <a href="#" onClick={() => handlePageClick(currentPage + 1)}>&raquo;</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeRecruiters;
