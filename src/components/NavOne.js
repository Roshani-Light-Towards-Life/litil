import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

class NavOne extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

        if (window.scrollY > 100) {
            this.setState({
                sticky: true
            });
        } else if (window.scrollY < 100) {
            this.setState({
                sticky: false
            });
        }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
        closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        const { navigationItems } = this.props;
        return (
            <div>
                <header className="header-area">
                    <div className="header-top-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="top-action-content">
                                        <div className="info-box info-box-1 d-flex align-items-center">
                                            <ul className="d-flex align-items-center">
                                                <li><a href="#"><i
                                                    className="fa fa-envelope"></i>contact@roshani.co.in</a></li>
                                                <li><a href="#"><i className="fa fa-phone-square"></i>+91-748 348 1458</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="top-action-content info-action-content">
                                        <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                            <ul className="top-action-list d-flex align-items-center">
                                                <li><a href="https://twitter.com/ROSHANI76815171" target="_blank" ><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/Roshani-Light-Towards-Life-110800777345226" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://www.linkedin.com/company/roshani-ngo/" target="_blank"><i className ="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo.png" alt="ROSHANI" title="ROSHANI" width="180" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            <Link href="#">
                                                <a className="theme-btn">donate now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        <li className="active"><Link href="/"><a>Home</a></Link></li>
                                                        <li><a href="#">school donations</a>
                                                            <ul className="dropdown-menu-item">
                                                                {
                                                                    navigationItems.schools && navigationItems.schools.map(school => (
                                                                        <li key={school.id}><Link href="/school/[id]" as={`/school/${school.id}`}><a>{school.name}</a></Link></li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li><a href ="#">training centers</a>
                                                            <ul className="dropdown-menu-item">
                                                              {
                                                                navigationItems.trainingCenters && navigationItems.trainingCenters.map(trainingCenter => (
                                                                    <li key={trainingCenter.id}><Link href="/trainingCenter/[id]" as={`/trainingCenter/${trainingCenter.id}`}><a>{trainingCenter.name}</a></Link></li>
                                                                ))
                                                              }
                                                            </ul>
                                                        </li>
                                                        <li><Link href="/causes"><a>causes</a></Link></li>
                                                        <li><a href="#">about</a>
                                                                <ul className="dropdown-menu-item">
                                                                    <li><Link href="/about"><a>about</a></Link></li>
                                                                    <li><Link href="/team"><a>team</a></Link></li>
                                                                    <li><Link href="/contact"><a>contact</a></Link></li>
                                                                </ul>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                <li className="sidenav__item"><a href="/">home</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/"><a>Home 1</a></Link></li>
                                        <li><Link href="/index2"><a>Home 2</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href='#'>schools</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        {
                                            navigationItems.schools && navigationItems.schools.map(school => {
                                                <li key={school.id}><Link href="/school/[id]" as={`/school/${school.id}`}><a>{school.name}</a></Link></li>
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">causes</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/causes"><a>causes</a></Link></li>
                                        <li><Link href="/causes-detail"><a>causes detail</a></Link></li>
                                        <li><Link href="#"><a>donate now</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">event</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/events"><a>events</a></Link></li>
                                        <li><Link href="/events-detail"><a>events detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">news</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/news"><a>news</a></Link></li>
                                        <li><Link href="/single-news"><a>news detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">pages</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/about"><a>about</a></Link></li>
                                        <li><Link href="/gallery"><a>gallery</a></Link></li>
                                        <li><Link href="/volunteer"><a>become a volunteer</a></Link></li>
                                        <li><Link href="/team"><a>our team</a></Link></li>
                                        <li><Link href="/sponsor"><a>sponsors</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><Link href="/contact"><a>contact</a></Link></li>
                            </ul>
                            <ul className="side-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                            <div className="side-btn">
                                <Link href="#"><a className="theme-btn">donate now</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    navigationItems: state.navigationItems
});

export default connect(mapStateToProps)(NavOne);
