import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Events from "../src/components/Events";

const EventsPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Events">
            <NavOne />
            <PageHeader title="Events" />
            <Events />
            <Footer />
        </Layout>
    );
};

export default EventsPage;
