import gql from 'graphql-tag';

const GET_NEVIGATION_BAR = gql`
  {
    schools {
      name
      id
    }
    trainingCenters {
      name
      id
    }
  }
`;

export default GET_NEVIGATION_BAR;