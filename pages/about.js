import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import AboutArea from "../src/components/AboutArea";
import MixerAreaTwo from "../src/components/MixerAreaTwo";
import Footer from "../src/components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="ROSHANI | About">
            <NavOne />
            <PageHeader title="About" />
            <AboutArea />
            <MixerAreaTwo />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
