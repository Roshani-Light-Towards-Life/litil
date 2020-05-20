import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import News from "../src/components/News";

const NewsPage = () => {
    return (
        <Layout pageTitle="Oxpitan | News">
            <NavOne />
            <PageHeader title="News" />
            <News />
            <Footer />
        </Layout>
    );
};

export default NewsPage;
