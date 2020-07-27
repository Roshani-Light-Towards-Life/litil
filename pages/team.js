import React from 'react';
import Layout from "../src/components/layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Team from "../src/components/Team";

const TeamPage = () => {
    return (
        <Layout pageTitle="ROSHANI | Team">
            <NavOne />
            <PageHeader title="Our Team" />
            <Team />
            <Footer />
        </Layout>
    );
};

export default TeamPage;
