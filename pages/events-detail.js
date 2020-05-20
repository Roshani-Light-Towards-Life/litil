import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import EventsDetail from "../src/components/EventsDetail";

const EventsDetailPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Events Detail">
            <NavOne />
            <PageHeader title="Events Detail" />
            <EventsDetail />
            <Footer />
        </Layout>
    );
};

export default EventsDetailPage;
