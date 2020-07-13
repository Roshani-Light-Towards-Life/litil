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
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Scholarship for Children</a></Link>
                                    </h3>
                                    < p className = "blog__desc" > We are committed to facilitate free & quality education for not-so-privilleged children in the country. We offer scholarships based on merit list.</p>
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
                                    <p className="blog__desc">Every child is special and so are their dreams. Through this program we help to connect a child with an Angel Sponsor or long term sponsorship.</p>
                                   <br/> <Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item4">
                                <div className="blog-img">
                                    <img src="/images/rural-women-financial-freedom.png" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Financial Freedom for Women</a></Link></h3>
                                    <p className="blog__desc">We support financial freedom for women. We believe, women who are financially free can take better decisions for themselves, their family and their children.</p>
                                    <br/><Link href="#"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src = "/images/rural-women-working.png" alt = "Rural Working Women" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/causes-detail"><a>Career Consultation For Women</a></Link></h3>
                                    <p className="blog__desc">Provide consultation & support them to achieve financial freedom through various online options and opportunites in their surroundings.</p>
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
                                    <p className="blog__desc">Literacy is less about knowing how to read & write and more about developing awareness. Awareness towards their rights, personal & social responsibilities.</p>
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
