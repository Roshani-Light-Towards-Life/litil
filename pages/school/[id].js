import React from 'react';
import Layout from "../../src/components/Layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import SchoolDetail from "../../src/components/SchoolDetail";
import { useRouter } from 'next/router'


const SchoolPage = () => {
    const router = useRouter()
    const { id } = router.query 
    return (
        <Layout pageTitle="Roshni | School Detail">
            <NavOne />
            <PageHeader title="School Detail" />
            <SchoolDetail />
            <Footer />
        </Layout>
    );
};

export default SchoolPage;