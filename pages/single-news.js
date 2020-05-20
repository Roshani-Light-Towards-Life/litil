import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import NewsSingle from "../src/components/NewsSingle";

const NewsSinglePage = () => {
    return (
        <Layout pageTitle="Oxpitan | Single News">
            <NavOne />
            <PageHeader title="Single News" />
            <NewsSingle />
            <Footer />
        </Layout>
    );
};

export default NewsSinglePage;
