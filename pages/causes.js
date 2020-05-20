import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Causes from "../src/components/Causes";
import Footer from "../src/components/Footer";

const CausesPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Causes">
            <NavOne />
            <PageHeader title="Causes" />
            <Causes />
            <Footer />
        </Layout>
    );
};

export default CausesPage;
