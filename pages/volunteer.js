import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Volunteer from "../src/components/Volunteer";

const VolunteerPage = () => {
    return (
        <Layout pageTitle="ROSHANI | Volunteer">
            <NavOne />
            <PageHeader title="become a volunteer" />
            <Volunteer />
            <Footer />
        </Layout>
    );
};

export default VolunteerPage;
