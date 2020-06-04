import gql from 'graphql-tag';

const GET_SCHOLARSHIP = gql`
  query getScholarships($id:ID!, $schoolId:ID!){
    scholarships (where:{id: $id, students:{school:{id:$schoolId}}}) {
      id
      name
      year
      students{
        id
        name
        school{
          id
          name
        }
        classRank
        schoolRank
        class
        image{
          url
        }
      }
      article{
        title
        content
        images{
          url
          previewUrl
        }
      }
    }
  }
`;

export default GET_SCHOLARSHIP;