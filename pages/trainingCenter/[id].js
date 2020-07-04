import React from 'react';
import Layout from "../../src/components/Layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import SkillTraining from "../../src/components/TrainingCentreDetail";
import { useRouter } from 'next/router'
import GET_TRAINING_CENTRE_DETAIL from '../../src/graphql/query/trainingCenter';
import { useQuery } from "@apollo/react-hooks";


const SkillTrainingPage = () => {
    const router = useRouter()
    const { id } = router.query
    function TrainingCentreDetail() {
        const { loading, error, data, fetchMore } = useQuery(GET_TRAINING_CENTRE_DETAIL, {
          notifyOnNetworkStatusChange: true,
          variables:{id:id}
        });
        console.log(data)
        if (data && data.trainingCenter) {
            console.log(data.trainingCenter)
          return (
            <SkillTraining trainingCenter={data.trainingCenter}/>
          );
        }
        return <div>Loading...</div>;
      }

    return (
        <Layout pageTitle="ROSHANI | Skill Training Details">
            <NavOne />
            <PageHeader title="Skill Training Center" />
            {TrainingCentreDetail()}
            <Footer />
        </Layout>
    );
};
export default SkillTrainingPage;
