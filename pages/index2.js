import React from 'react';
import Layout from "../src/components/layout";
import NavTwo from "../src/components/NavTwo";
import Footer from "../src/components/Footer";
import SliderTwo from "../src/components/SliderTwo";
import GiveArea from "../src/components/GiveArea";
import MakeWorldArea from "../src/components/MakeWorldArea";
import ClientsLogo from "../src/components/ClientsLogo";
import DonateArea from "../src/components/DonateArea";
import MixerAreaThree from "../src/components/MixerAreaThree";
import CausesArea from "../src/components/CausesArea";
import CategoryArea from "../src/components/CategoryArea";
import GalleryCarousel from "../src/components/GalleryCarousel";
import Pricing from "../src/components/Pricing";
import EventsHome from "../src/components/EventsHome";
import VolunteerArea from "../src/components/VolunteerArea";
import CallToActionThree from "../src/components/CallToActionThree";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Roshani - Light towards life">
            <NavTwo />
            <SliderTwo />
            <GiveArea />
            <MakeWorldArea />
            <ClientsLogo />
            <DonateArea />
            <MixerAreaThree />
            <CausesArea />
            <CategoryArea />
            <GalleryCarousel />
            <Pricing />
            <EventsHome />
            <VolunteerArea />
            <CallToActionThree />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
