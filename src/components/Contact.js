import React from 'react';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2 className="section__title">Get in Touch With Us</h2>
                            <p className="section__meta">Write a message</p>
                            <p className="section__desc">
                                We are a bunch of passionate and crazy people, who actually believe that the world can be made a better place
                                for every human being on this planet. A better home, a better school, a better society and of cource a better life.
                                We strive to make this world a better place for every human being. At present we are focusing on rural India & we support
                                for following causes: Children 's education & wellness, Women's financial freedom, Literacy and awareness in rural India.
                            </p>
                            <ul className="section__list">
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Full Name" />
                                    </div>

                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="email" name="email"
                                               placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="number" name="phone"
                                               placeholder="Phone Number" />
                                    </div>

                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message"
                                                  placeholder="Write a Message"></textarea>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row contact-detail-action">
                    <div className="col-lg-4">
                        <div className="contact-item contact-item1">
                            <h3 className="contact__title"></h3>
                            <p className="contact__desc">
                                A non-profit org on a mission to contribute for children's education, women's financial freedom and self-reliant rural India.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item2">
                            <h3 className="contact__title">Address</h3>
                            <p className="contact__desc">
                                Prestige Silver Crest, Kadubisanahalli, Bellandur, Bengaluru, PIN-560103, Karnataka, India.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item3">
                            <h3 className="contact__title">Contact</h3>
                            <p className="contact__desc">
                                contact@roshani.co.in <br />
                                +91-7483481458
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
