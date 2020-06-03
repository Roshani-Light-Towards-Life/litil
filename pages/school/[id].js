import React from 'react';
import Layout from "../../src/components/Layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import SchoolDetail from "../../src/components/SchoolDetail";
import GET_SCHOOL_DETAIL from '../../src/graphql/query/school';
import Error from 'next/error'

const SchoolPage = ({ props }) => {
    if (props && props.school) {
        let yearsWiseScholarships = {}
        for (const scholarship of props.school.scholarships) {
            if (yearsWiseScholarships[scholarship.year]) {
                yearsWiseScholarships[scholarship.year].push(scholarship);
            } else {
                yearsWiseScholarships[scholarship.year] = [scholarship]
            }
        }
        props.school["yearsWiseScholarships"] = yearsWiseScholarships
        return (
            <Layout pageTitle="ROSHANI | School Detail">
                <NavOne />
                <PageHeader title={props.school.name} />
                <SchoolDetail school={props.school} />
                <Footer />
            </Layout>
        );
    }
    return <Error statusCode="404"></Error>;
};
SchoolPage.getInitialProps = async ({ ctx, apolloClient }) => {
    console.log(ctx.query)
    const { id } = ctx.query
    const data = await apolloClient.query({ query: GET_SCHOOL_DETAIL, variables: { id: id } });
    return { props: data.data }
}
export default SchoolPage;