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
        const res = await fetch('http://localhost:1337/sponsors', {
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
            alert(response.message);
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
                                <div className="section-icon">
                                    <img src="/images/favicon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Give a helping hand for homeless childrens</h2>
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
                                            <i className="icon-water-bottle"></i>
                                            <h4>water</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="icon-health"></i>
                                            <h4>Medical</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que
                                    id erat quis simply free text sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incidi labore et dolore magna aliqua enim ad minim veniam.
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
                                    <img src="/images/helping-img.jpg" alt="" />
                                </div>
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/favicon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">Charity activities are taken place around the
                                        world</h2>
                                    <p className="section__desc">
                                        Aliq is notm hendr erit a augue insu image pellen tes que id erat
                                        quis simply free text sollicitud. Lorem ipsum dolor
                                        sit not amet, consectetur adipiscing ullam
                                        blandit simply free text hendrerit faucibus suspendisse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-form">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/favicon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title text__white">Become Angel Sponsor</h2>
                                    <p className="section__meta text__white">join us now</p>
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
