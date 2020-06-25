import React,{ useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = () => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    return (
        <section className="slider-area">
            <div className="homepage-slide1">

                <Swiper getSwiper={setSwiper}>
                <div className="single-slide-item slide-bg2">
                    <div className="slide-item-table">
                        <div className="slide-item-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="slider-heading">
                                            <p className="slider__meta">welcome to ROSHANI</p>
                                            <h2 className="slider__title">Join us to make this world a better place.</h2>
                                            <a href="causes" className="theme-btn">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg1">
                    <div className="slide-item-table">
                        <div className="slide-item-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="slider-heading">
                                            <p className="slider__meta">Lend the helping hand</p>
                                            <h2 className="slider__title">Let's make their dreams a reality</h2>
                                            <a href="causes" className="theme-btn">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg3">
                    <div className="slide-item-table">
                        <div className="slide-item-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="slider-heading">
                                            <p className="slider__meta">Get involved</p>
                                            <h2 className="slider__title">Contribute towards women's financial freedom</h2>
                                            <a href="causes" className="theme-btn">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Swiper>
                <div className="owl-dots">
                    <div onClick={goPrev} className="owl-dot"><span></span></div>
                    <div onClick={goNext} className="owl-dot"><span></span></div>
                </div>
            </div>
        </section>
    );
};

export default SliderOne;
