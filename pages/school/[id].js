import React from 'react';
import Layout from "../../src/components/Layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import SchoolDetail from "../../src/components/SchoolDetail";
import { useRouter } from 'next/router'
import GET_SCHOOL_DETAIL from '../../src/graphql/query/school';
import { useQuery } from "@apollo/react-hooks";


const SchoolPage = () => {
    const router = useRouter()
    const { id } = router.query 
    function schoolDetail() {
        const { loading, error, data, fetchMore } = useQuery(GET_SCHOOL_DETAIL, {
          notifyOnNetworkStatusChange: true,
          variables:{id:id}
        });
        if (data && data.school) {
            console.log(data.school)
          return (
            <SchoolDetail school={data.school}/>
          );
        }
        return <div>Loading...</div>;
      }

    return (
        <Layout pageTitle="ROSHANI | School Detail">
            <NavOne />
            <PageHeader title="School Detail" />
            {schoolDetail()}
            <Footer />
        </Layout>
    );
};
export default SchoolPage;