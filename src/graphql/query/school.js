import gql from 'graphql-tag';

const GET_SCHOOLS = gql`
  query getSchool($id:ID!){
    school (id: $id) {
      id
      name
      principalName
      email
      address
      phoneNumber
      article{
        title
        content
        images{
          url,
          previewUrl
        }
      }
    }
  }
`;

export default GET_SCHOOLS;