import React from 'react';

const CausesArea = () => {
    return (
        <div>
            <section className="causes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Latest Causes</h2>
                                <p className="section__meta">help us now</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-content-wrap">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <img src="/images/causes-1.jpg" alt="" />
                                        < span className = "blog__tag" > < i className = "fa fa-flash" > < /i> trending</span >
                                    </div>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="23"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">They want to Study</a>
                                        </h3>
                                        <p className="blog__desc">We are committed to facilitate free & quality education to every poor child in India. We offer scholarships to the students based on merit list.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <a href="/donate" className="theme-btn">donate now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item2">
                                    <div className="blog-img">
                                        <img src="/images/causes-4.jpg" alt="" />
                                            
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">Sports & Wellness</a>
                                        </h3>
                                        <p className="blog__desc">We support physical wellbeing of children by donating Sports Kit to the schools. We also help schools to conduct Yoga sessions & Mediation sessions for children.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <a href="/donate" className="theme-btn">donate now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item3">
                                    <div className="blog-img">
                                        <img src="/images/causes-5.jpg" alt="" />
                                    </div>
                                    <div id="bar3" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="44"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">Their Dreams should be funded.</a></h3>
                                        <p className="blog__desc">Every child is special and so are their dreams. We help to connect dreamers with a legitimate sponsors.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <a href="/donate" className="theme-btn">donate now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CausesArea;
