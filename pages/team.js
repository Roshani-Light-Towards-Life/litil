import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import Team from "../src/components/Team";

const TeamPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Team">
            <NavOne />
            <PageHeader title="Our Team" />
            <Team />
            <Footer />
        </Layout>
    );
};

export default TeamPage;
