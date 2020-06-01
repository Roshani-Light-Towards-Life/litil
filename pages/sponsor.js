import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Sponsor from "../src/components/Sponsor";


const SponsorPage = () => {
    return (
        <Layout pageTitle="ROSHANI | Sponsors">
            <NavOne />
            <PageHeader title="Sponsors" />
            <Sponsor />
            <Footer />
        </Layout>
    );
};

export default SponsorPage;
