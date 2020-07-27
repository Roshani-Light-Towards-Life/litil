import React from 'react';
import Layout from "../src/components/layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import CausesDetail from "../src/components/CausesDetail";

const CausesPage = () => {
    return (
        <Layout pageTitle="ROSHANI | Causes Detail">
            <NavOne />
            <PageHeader title="Causes Detail" />
            <CausesDetail />
            <Footer />
        </Layout>
    );
};

export default CausesPage;
