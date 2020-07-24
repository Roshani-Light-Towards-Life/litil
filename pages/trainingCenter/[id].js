import React from 'react';
import Layout from "../../src/components/layout";
import NavOne from "../../src/components/NavOne";
import PageHeader from "../../src/components/PageHeader";
import Footer from "../../src/components/Footer";
import SkillTraining from "../../src/components/TrainingCentreDetail";
import GET_TRAINING_CENTRE_DETAIL from '../../src/graphql/query/trainingCenter';

const SkillTrainingPage = ({ props }) => {
  if (props && props.trainingCenter) {
      return (
          <Layout pageTitle="ROSHANI | Skill Training Details">
              <NavOne />
              <PageHeader title="Skill Training Center"/>
              <SkillTraining trainingCenter={props.trainingCenter}/>
              <Footer />
          </Layout>
      );
  }
  return <Error statusCode="404"></Error>;
};
SkillTrainingPage.getInitialProps = async ({ ctx, apolloClient }) => {
  console.log(ctx.query)
  const { id } = ctx.query
  const data = await apolloClient.query({ query: GET_TRAINING_CENTRE_DETAIL, variables: { id: id } });
  return { props: data.data }
}
export default SkillTrainingPage;