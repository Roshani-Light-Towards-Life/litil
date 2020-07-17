import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import Layout from "../src/components/layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import School from "../src/components/School";

import GET_SCHOOLS from '../src/graphql/query/school';

const SchoolPage = () => {
    function SchoolList() {
        const { loading, error, data, fetchMore } = useQuery(GET_SCHOOLS, {
          notifyOnNetworkStatusChange: true
        });
        if (data && data.schools) {
          return (
            <div>
              {data.schools.map((school, index) => (
                  <School school={school}/>
                ))}
            </div>
          );
        }
        return <div>Loading...</div>;
      }
    return (
        <Layout pageTitle="ROSHANI | Schools">
            <NavOne />
            <PageHeader title="Schools" />
            <section className="sponsor-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {SchoolList()}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
};

export default SchoolPage;
