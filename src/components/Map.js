import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src = "https://www.google.com/maps/place/Prestige+Silver+Crest+Apartments/@12.9358938,77.6869268,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae13afbcf3572f:0xaaf8cd07caab18f7!8m2!3d12.9358938!4d77.6891155"
                    className = "map" allowFullScreen = "" >

                </iframe>

            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
