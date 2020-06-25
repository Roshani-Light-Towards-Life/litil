import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { buildImageUri } from '../util'
const GalleryCarousel = (props) => {

    useEffect(() => {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            beforeSlideLoad: (slide, data) => {
                // Need to execute a script in the slide?
                // You can do that here...
            }
        });

    });

    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
            1499: {
                slidesPerView: 3
            },

            991: {
                slidesPerView: 2
            },

            767: {
                slidesPerView: 1

            },

            575: {
                slidesPerView: 1
            }
        }
    }

    return (
        <div className="gallery-area text-center">
            <div className="container">
                <div className="row gallery-wrap">
                    <div className="col-lg-12">
                        <div className="gallery-carousel">
                            <Swiper {...params}>
                                {props.images.map(image => {
                                    return (
                                        <div className="gallery-item">
                                            <img src={buildImageUri(image.url)} alt="" />
                                            <a href={buildImageUri(image.url)} className="glightbox">
                                                <span className="gallery-icon"></span></a>
                                        </div>);
                                })}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCarousel;
