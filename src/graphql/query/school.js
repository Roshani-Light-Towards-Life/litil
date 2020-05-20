import gql from 'graphql-tag';

const GET_SCHOOLS = gql`
  {
    schools {
      name
      principalName
      email
      address
    }
  }
`;

export default GET_SCHOOLS;