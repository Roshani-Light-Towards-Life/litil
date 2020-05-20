import React from 'react';

const Sponsor = (props) => {
    return (
        <div className="sponsor-wrap">
        <div className="row">
            <div className="col-lg-3">
                <div className="logo-item logo-item1">
                    <img src="/images/client-logo2.png" alt="" />
                </div>
            </div>
            <div className="col-lg-9">
                <div className="sponsor-item">
                    <h3 className="sponsor__title">{props.school.name}</h3>
                    <span className="sponsor__meta">{props.school.address}</span>
                    <p className="sponsor__text">
                        Phasellus vehicul justo eget diam dosuere sollicitudin eu tincidun.
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry been the industry's standard dummy text ever since.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sponsor;
