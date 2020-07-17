import React from 'react';
import Layout from "../../src/components/layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import ScholarshipDetail from "../../src/components/ScholarshipDetail";
import Error from 'next/error'
import GET_SCHOLARSHIP from '../../src/graphql/query/scholarship';


const ScholarshipPage = ({ props }) => {
    if (props && props.scholarships.length > 0) {
        return (
            <Layout pageTitle="ROSHANI | Scholarship Detail">
                <NavOne />
                <PageHeader title={props.scholarships[0].name} />
                <ScholarshipDetail scholarship={props.scholarships[0]} />
                <Footer />
            </Layout>
        );
    }
    return <Error statusCode="404"></Error>;

};
ScholarshipPage.getInitialProps = async ({ ctx, apolloClient }) => {
    const { slug } = ctx.query
    const data = await apolloClient.query({ query: GET_SCHOLARSHIP, variables: { id: slug[0], schoolId: slug[1] } });
    return { props: data.data }
}
export default ScholarshipPage;