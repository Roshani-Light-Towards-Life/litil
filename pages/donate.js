import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Donate from "../src/components/Donate";

const DonatePage = () => {
    return (
        <Layout pageTitle="Oxpitan | Donate">
            <NavOne />
            <PageHeader title="Donate" />
            <Donate />
            <Footer />
        </Layout>
    );
};

export default DonatePage;
