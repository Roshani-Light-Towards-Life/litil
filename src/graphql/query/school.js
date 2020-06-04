import gql from 'graphql-tag';

const GET_SCHOOLS = gql`
  query getSchool($id:ID!){
    school (id: $id) {
      id
      name
      principalName
      pocName
      email
      address
      image{
        url
        previewUrl
      }
      phoneNumber
      article{
        title
        content
        images{
          url,
          previewUrl
        }
      },
      scholarships{
        id
        year
        name
      }
    }
  }
`;

export default GET_SCHOOLS;