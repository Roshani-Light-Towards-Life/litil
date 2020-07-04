import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-large-img">
                            <img src="/images/causes-we-care-for.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/about-top.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                            
                                <h2 className="section__title">Discover About ROSHANI</h2>
                                <p className="section__meta">learn about the non profit org</p>
                                <p className="section__desc">
                                    We are a bunch of passionate and motivated people, who actually believe that the world can be made a better place
                                    for every human being. A better home, a better school, a better society and of cource a better life.
                                    We strive to make this world a better place for every human being. At present we are focusing on rural India & we support
                                    for following causes: Children's education & wellness, Women's financial freedom, Literacy and awareness in rural India. 
                                    We also want to contribute towards self-reliant rural India in long term.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
