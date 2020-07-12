import React from 'react';
import { useState } from 'react';   

const HelpingArea = () => {
    
    const [sponsor, setSponsor] = useState({
        Name: '',
        Email: '',
        phoneNumber: ''
    });

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = e =>
        setSponsor({ ...sponsor, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
        const res = await fetch('http://area51:1337/sponsors', {
            method: 'POST',
            body: JSON.stringify(sponsor),
            headers: { 'Content-Type': 'application/json' }
        });

        const json = await res.json();

        if (json.id) {
            setResponse({
            type: 'success',
            message: 'Thank you for registering yourself as angel sponsor. We will get touch with you'
            });
            document.getElementById("sponsor-register").reset();
        } else {
            setResponse({
            type: 'error',
            message: json.message
            });
        }
        } catch (e) {
        console.log('An error occurred', e);
        setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
        });
        }
    };

    return (
        <div>
            <section className="mixer-area helping-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading mixer-heading">

                                <h2 className="section__title">Give us a helping hand for under-previlleged children.</h2>
                            </div>
                            <div className="helping-item">
                                <div className="row">
                                    <div className="col">
                                        <div className="helping-box helping-box1">
                                            <i className="icon-hamburger"></i>
                                            <h4>food</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box2">
                                            <i className="icon-mortarboard"></i>
                                            <h4>education</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="icon-health"></i>
                                            <h4>wellness</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    As part of this program, Angel Sponsors select one or more child whom they want to support with education, food and wellness in long term. 
                                    We share the list of under-privilleged childrens in various schools along with their brief details. You can choose 1 or more children and 
                                    support them for a minimum period of 5 years. Following are the suggested periods: 5 Years, 8 Years, 10 Years.
                                    An Angel sponsor can choose to support till the child becomes financially independent or his/her future is secured.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mixer-area2 helping-area2">
                <div className="container">
                    <div className="row fun-content-wrap">
                        <div className="col-lg-6">
                            <div className="fun-content">
                                <div className="fun-item fun-item1">
                                    <img src="/images/Home-Page-Sponsor-Form.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-form">
                                <div className="section-heading">
                                    <h2 className="section__title text__white">Become an Angel Sponsor</h2>
                                    <p className="section__meta text__white">Join us now</p>
                                </div>
                                <div className="form-shared">
                                    <form id="sponsor-register" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name ="Name" placeholder="Full Name" 
                                                    pattern="^\D+$"
                                                    title="Only letters and special characters are allowed"
                                                    onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="Email"
                                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" title="Please enter valid email address"
                                                           placeholder="Email Address" onChange={handleChange}
                                                           required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="phoneNumber" placeholder="Contact number" 
                                                    pattern="[2-9]{2}\d{8}" maxLength="10" title="Please enter 10 digit phone number"
                                                    onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="theme-btn submit__btn">continue now</button>
                                                <label>{ response.message }</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpingArea;
