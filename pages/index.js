import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import Footer from "../src/components/Footer";
import SliderOne from "../src/components/SliderOne";
import HiwArea from "../src/components/HiwArea";
import MixerArea from "../src/components/MixerArea";
import CausesArea from "../src/components/CausesArea";
import HelpingArea from "../src/components/HelpingArea";
import TeamArea from "../src/components/TeamArea";
import CallToAction from "../src/components/CallToAction";
import CallToActionTwo from "../src/components/CallToActionTwo";
import Error from 'next/error'
import GET_STUDENTS_COUNT from '../src/graphql/query/students';

const HomePage = ({ props }) => {
  if (props && props.studentsCount) {
    return (
      <Layout pageTitle="ROSHANI - Light towards life">
        <NavOne />
        <SliderOne />
        <HiwArea />
        <MixerArea studentsCount = { props.studentsCount } />
        <CausesArea />
        <HelpingArea />
        <TeamArea />
        <CallToAction />
        <CallToActionTwo />
        <Footer />
      </Layout>
    );
  }
  return <Error statusCode="404"></Error>;
};

HomePage.getInitialProps = async ({ ctx, apolloClient }) => {
  const data = await apolloClient.query({ query: GET_STUDENTS_COUNT});
  return { props: data.data }
}

export default HomePage;
