import React from 'react';

const Team = () => {
    return (
        <section className="team-area team-area2 text-center">
            <div className="container">
                <div className="row team-content-wrap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src="/images/executive-member-2.png" alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">Babli</a></h3>
                                <span className="team__title-meta">Executive Member</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                < img src = "/images/co-founder-1.png"
                                alt = "team image" / >
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">Roshni Kumari</a></h3>
                                <span className="team__title-meta">co-founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src="/images/co-founder-2.png" alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">Subhranil Choudhury</a></h3>
                                <span className="team__title-meta">Co-founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <img src="/images/executive-member-1.png" alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">Kamaljeet Singh Rajpoot</a></h3>
                                <span className="team__title-meta">Executive Member</span>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
    );
};

export default Team;
