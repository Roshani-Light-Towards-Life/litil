import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">about</h3>
                                    <ul className="foot__links">
                                        <li><a href="/causes">causes we care</a></li>
                                        <li><a href="/about">about</a></li>
                                        <li><a href="/team">team</a></li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title">explore</h3>
                                    <ul className="foot__links">
                                        <li><a href="/school">scholarships</a></li>
                                        <li><a href="#">trainings</a></li>
                                        <li><a href="/events">events</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item4">
                                    <h3 className="widget__title">contact</h3>
                                    <ul className="contact__info">
                                        <li>Prestige Silver Creast, Kadubisanahalli, Bengaluru, PIN-560103</li>
                                        <li> < a href = "mailto:contact@roshani.co.in" > contact@roshani.co.in </a></li >
                                        <li><a href="tel:7483481458">+91-748 348 1458</a></li>
                                    </ul>
                                    <div className="footer__social">
                                        <ul>
                                            <li><a href="https://twitter.com/ROSHANI76815171" target="_blank" ><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/Roshani-Light-Towards-Life-110800777345226" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/roshani-ngo/" target="_blank"><i className ="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-desc">
                                        <p>© Copyright 2020 by <a href="#">ROSHANI</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                    <i className="fa fa-angle-up" title="Go top"></i>
                </div>

            </div>
        );
    }
}

export default Footer;