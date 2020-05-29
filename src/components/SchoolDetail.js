import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const SchoolDetail = (props) => {
    const { school } = props;
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/img12.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">{school.name}
                                        </h3>
                                        <ul className="blog__list">
                                            <li><i className="fa fa-user"></i> Principal: <span>{school.principalName}</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="/donate"><a className="theme-btn">donate now</a></Link>
                                    </div>
                                </div>
                                <div className="blog-inner-content-2">
                                    <ReactMarkdown source={school.article.content} className="causes__text"/>
                                    <div className="inner-causes-img-box row">
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item1">
                                                <img src="/images/img13.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item2">
                                                <img src="/images/img14.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="causes__text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget">
                                <div className="author-box">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <h4 className="author__title">Point of contact: <a href="#">{school.principalName}</a></h4>
                                        <ul className="author__list">
                                            <li><i className="fa fa-map-marker"></i> {school.address}</li>
                                            <li><i className="fa fa-phone"></i> {school.phoneNumber}</li>
                                            <li><i className="fa fa-envelope"></i> {school.phoneNumber}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <h2 className="widget__title">Recent Donations</h2>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar2.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$20</span>
                                        <h4 className="author__title author__title2">David
                                            Marks <span>3 hours ago</span></h4>
                                        <ul className="author__list">
                                            <li>God bless you dear</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar3.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$35</span>
                                        <h4 className="author__title author__title2">Jean
                                            Jerome <span>10 hours ago</span></h4>
                                        <ul className="author__list">
                                            <li>My prayers are with you</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar"></div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$35</span>
                                        <h4 className="author__title author__title2">Anonymous <span>20 hours ago</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar4.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$160</span>
                                        <h4 className="author__title author__title2">Kistin Eve <span>1 day ago</span>
                                        </h4>
                                        <ul className="author__list">
                                            <li>Wishing you blessings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <h2 className="widget__title">Share Cause</h2>
                                <div className="side-share-profile">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolDetail;
