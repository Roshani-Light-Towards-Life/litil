import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";
import Map from "../src/components/Map";


const ContactPage = () => {
    return (
        <Layout pageTitle="ROSHANI | Contact">
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default ContactPage;
