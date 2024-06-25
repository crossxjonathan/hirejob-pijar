import React, { useEffect, useState } from 'react';
import searchicon from '../../../../assets/images/search.png'
import axios from 'axios';

const HomeWorkers = () => {

    const [searchValue, setSearchValue] = useState('');
    const [workers, setWorkers] = useState([]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        axios.get('http://localhost:3000/workers', {
            params: {
                limit: 5,
                page: 1,
                sort: 'ASC',
                sortby: 'name',
                search: searchValue
            }
        })
        .then(res => {
            alert("Data retrived successfully!");
            console.log(res.data);
            setWorkers(res.data);
        })
        .catch(error => {
            alert('Failed to retrieve data');
            console.log('Error fetching data:', error);
        });
    };

    useEffect(() => {

    },[]);

    useEffect(() => {
        // handleSearchSubmit();
    }, [])

    return (
        <div id='workerspages'>
            <div className='homecolor'>
                <section>
                    <div className='containerHome'>
                        <div className='searchwrapper'>
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
                                            <a href="#">Name</a>
                                            <a href="#">Skill</a>
                                            <a href="#">ASC</a>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={handleSearchSubmit} className='searchbutton'>
                                    Search
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='containerHome'>
                        <div className='tablewrapper'>
                            {workers.map((worker, index) => {
                                <div className='tableprofile' key={index}>
                                    <div className='lefttable'>
                                        <div className='displayprofile'>
                                            image
                                        </div>
                                        <div className='profilecontent'>
                                            <span>{worker.name}</span>
                                            <span>{worker.job}</span>
                                            <span>{worker.location}</span>
                                            <span>{worker.skill}</span>
                                        </div>
                                    </div>
                                    <div className='righttable'>
                                        View Profile
                                    </div>
                                </div>
                            })}
                            {workers.map((worker, index) => {
                                <div className='tableprofile' key={index}>
                                    <div className='lefttable'>
                                        <div className='displayprofile'>
                                            image
                                        </div>
                                        <div className='profilecontent'>
                                            <span>{worker.name}</span>
                                            <span>{worker.job}</span>
                                            <span>{worker.location}</span>
                                            <span>{worker.skill}</span>
                                        </div>
                                    </div>
                                    <div className='righttable'>
                                        View Profile
                                    </div>
                                </div>
                            })}
                            {workers.map((worker, index) => {
                                <div className='tableprofile' key={index}>
                                    <div className='lefttable'>
                                        <div className='displayprofile'>
                                            image
                                        </div>
                                        <div className='profilecontent'>
                                            <span>{worker.name}</span>
                                            <span>{worker.job}</span>
                                            <span>{worker.location}</span>
                                            <span>{worker.skill}</span>
                                        </div>
                                    </div>
                                    <div className='righttable'>
                                        View Profile
                                    </div>
                                </div>
                            })}
                            {workers.map((worker, index) => {
                                <div className='tableprofile' key={index}>
                                    <div className='lefttable'>
                                        <div className='displayprofile'>
                                            image
                                        </div>
                                        <div className='profilecontent'>
                                            <span>{worker.name}</span>
                                            <span>{worker.job}</span>
                                            <span>{worker.location}</span>
                                            <span>{worker.skill}</span>
                                        </div>
                                    </div>
                                    <div className='righttable'>
                                        View Profile
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='pagination'>
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeWorkers