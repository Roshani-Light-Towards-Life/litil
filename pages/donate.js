import React from 'react';
import Layout from "../src/components/layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Donate from "../src/components/Donate";

const DonatePage = () => {
    return (
        <Layout pageTitle="ROSHANI | Donate">
            <NavOne />
            <PageHeader title="Donate" />
            <Donate />
            <Footer />
        </Layout>
    );
};

export default DonatePage;
