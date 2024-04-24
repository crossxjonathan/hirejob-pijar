import React from 'react';
import Slider from 'react-slick';
import hary from '../../assets/images/photo hary.svg';
import liam from '../../assets/images/photo liam.svg';
import louis from '../../assets/images/photo louis.svg';
import nial from '../../assets/images/photo nial.svg';
import imagedefault from '../../assets/images/image-default.png';

import Footer from './hoc/footer';

import titleOne from '../../assets/images/thumbnail landingpage 1.svg';
import titleTwo from '../../assets/images/thumbnail landingpage 2.svg';
import titleThree from '../../assets/images/thumnail landingpage 3.svg';
import infobar from '../../assets/images/Rectangle 526.png'

import { FcOk } from 'react-icons/fc'

const LandingPage = () => {
    const setSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
                breakpoint: 340,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="landingpage">
            <section>
                <div className='containerOne'>
                    <div className='textone paddingStart'>
                        <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <div className='textonebutton'>
                            Mulai Dari Sekarang
                        </div>
                    </div>
                    <div className='imageone'>
                        <img src={titleOne} alt="imageone" />
                    </div>
                </div>
            </section>
            <section>
                <div className='containerOne'>
                    <div className='textone mobileCenter'>
                        <img src={titleTwo} alt="imagetwo" />
                    </div>
                    <div className='imageone paddingtwo'>
                        <h1>Kenapa harus mencari talent di peworld</h1>
                        <p><FcOk /> Lorem ipsum dolor sit amet.</p>
                        <p><FcOk /> Lorem ipsum dolor sit amet.</p>
                        <p><FcOk /> Lorem ipsum dolor sit amet.</p>
                        <p><FcOk /> Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='containerOne'>
                    <div className='textone paddingSkill'>
                        <h1>Skill Talent</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <div className='skillcontainer'>
                            <div className='skillLeft'>
                                <p><FcOk /> Java</p>
                                <p><FcOk /> Kotlin</p>
                                <p><FcOk /> PHP</p>
                                <p><FcOk /> JavaScript</p>
                            </div>
                            <div className='skillRight'>
                                <p><FcOk /> Golang</p>
                                <p><FcOk /> C++</p>
                                <p><FcOk /> Ruby</p>
                                <p><FcOk /> 10+ Bahasa Lainnya</p>
                            </div>
                        </div>
                    </div>
                    <div className='imageone'>
                        <img src={titleThree} alt="imageone" />
                    </div>
                </div>
            </section>
            <section>
                <div className='colorContainer'>
                <div className='containerOne'>
                    <div className='opinioncontainer'>
                        <div className='textone paddingcarrousel'>
                            <h1>Their opinion about peworld</h1>
                            <div className='sliderprofile'>
                                <Slider {...setSlider}>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={hary} alt="hary" />
                                        </div>
                                        <h3>Harry Styles</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={nial} alt="hary" />
                                        </div>
                                        <h3>Niall Horan</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={louis} alt="hary" />
                                        </div>
                                        <h3>Louis Tomlinson</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={liam} alt="hary" />
                                        </div>
                                        <h3>Liam payne</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={imagedefault} alt="hary" />
                                        </div>
                                        <h3>jasiman</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                    <div className='card-profile'>
                                        <div className='framephoto'>
                                            <img src={imagedefault} alt="hary" />
                                        </div>
                                        <h3>ilham</h3>
                                        <p>Web Developer</p>
                                        <div className='textopinion'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className='containerOne'>
                    <div className='infobar'>
                        <div className='infoframe'>
                            <img src={infobar} alt="infobar" />
                            <h1>Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className='textonebutton'>
                            Mulai Dari Sekarang
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;