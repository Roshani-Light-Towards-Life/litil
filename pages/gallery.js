import React from 'react';
import Layout from "../src/components/layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Gallery from "../src/components/Gallery";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Gallery">
            <NavOne />
            <PageHeader title="Gallery" />
            <Gallery />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
