import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import PageHeader from "../src/components/PageHeader";
import Footer from "../src/components/Footer";
import TrainingCenter from "../src/components/TrainingCentreDetail";

import GET_TRAINIG_CENTRE from '../src/graphql/query/trainingCenter';

const TrainingCenterPage = () => {
    function trainingCenterList() {
        const { loading, error, data, fetchMore } = useQuery(GET_TRAINIG_CENTRE, {
          notifyOnNetworkStatusChange: true
        });
        if (data && data.trainingCenters) {
          return (
            <div>
              {data.trainingCenters.map((trainingCenter, index) => (
                  <TrainingCenter trainingCenter={trainingCenter}/>
                ))}
            </div>
          );
        }
        return <div>Loading...</div>;
      }
    return (
        <Layout pageTitle="ROSHANI | Schools">
            <NavOne />
            <PageHeader title="trainingCenter" />
            <section className="sponsor-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {trainingCenterList()}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
};
export default TrainingCenterPage;
