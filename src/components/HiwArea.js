import React from 'react';

const HiwArea = () => {
    return (
        <section className="hiw-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg1">
                                <figure>
                                    <img src="/images/hiw-img.png" alt="School Scholarships" />
                                        <h3 className="hiw-title">Scholarships for children</h3>
                                        <div className="hiw-btn-box">
                                            <a href="/school/1" className="theme-btn">read more</a>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg2">
                                <figure>
                                    <img src="/images/hiw-img2.png" alt="Women Skill Trainings" />
                                        <h3 className="hiw-title">Skill Trainings  for women</h3>
                                        <div className="hiw-btn-box">
                                            <a href="/trainings/1" className="theme-btn">read more</a>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg3">
                                <figure>
                                    <img src="/images/hiw-img3.png" alt="An Angel in My Life" />
                                        <h3 className="hiw-title">Become an Angel Sponsor</h3>
                                        <div className="hiw-btn-box">
                                            <a href="/causes" className="theme-btn">read more</a>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiwArea;
