import React from 'react';
import Link from 'next/link';

const Causes = () => {
    return (
        <section className="causes-area causes-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/causes-1.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Scholarships</a></Link>
                                    </h3>
                                    < p className = "blog__desc" > We are committed to facilitate free & quality education for not-so-privilleged children in the country. We offer scholarships based on merit list. </p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
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
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Sports & Wellness</a></Link></h3>
                                    < p className="blog__desc"> We support physical wellbeing of children by donating Sports Kit to the schools.We also help schools to conduct Yoga & Mediation practices
                                    for children.< /p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item3">
                                <div className="blog-img">
                                    <img src="/images/causes-3.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>An Angel Sponsor</a></Link>
                                    </h3>
                                    <p className="blog__desc">Every child is special and so are their dreams. Through this program we help to connect a child with an Angel Sponsor for long term sponsorship.</p>
                                   <br/> <Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item4">
                                <div className="blog-img">
                                    <img src = "/images/rural-women-working.png" alt = "Skill Training for Women" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Skill Trainings</a></Link></h3>
                                    <p className="blog__desc">We support financial freedom for women. We conduct various skill training programs in rural areas for: stitching, beauty, computer education, local industry etc.</p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src = "/images/rural-career-consultation.jpg" alt = "Career Consultation For Women" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Career Consultation For Women</a></Link></h3>
                                    <p className="blog__desc">Provide consultation & support them to achieve financial freedom through various online options and career opportunites in their surroundings.</p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/rural-women-literacy.png" alt="Rural Women Literacy" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Literacy and Awareness for Women</a></Link>
                                    </h3>
                                    <p className="blog__desc">Literacy is less about knowing how to read & write and more about building awareness. Awareness towards their rights, their personal & social responsibilities etc.</p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Causes;
