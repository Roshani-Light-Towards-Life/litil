import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import AboutArea from "../src/components/AboutArea";
import MixerAreaTwo from "../src/components/MixerAreaTwo";
import TeamArea from "../src/components/TeamArea";
import FaqArea from "../src/components/FaqArea";
import ServiceArea from "../src/components/ServiceArea";
import ClientsLogoTwo from "../src/components/ClientsLogoTwo";
import Footer from "../src/components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Oxpitan | About">
            <NavOne />
            <PageHeader title="About" />
            <AboutArea />
            <MixerAreaTwo />
            <TeamArea />
            <FaqArea />
            <ServiceArea />
            <ClientsLogoTwo />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
