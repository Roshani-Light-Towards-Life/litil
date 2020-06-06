import gql from 'graphql-tag';

const GET_SKILLTRAINING = gql`
query getSkillTraining($id:ID!){
  trainingCenter (id: $id) {
    id
   name
   address
   contactNumber
   leadManager
   email
   activities{
     id
     name
     Description
     eventDate
     POC{
       id
       name
       phoneNumber
       email
     }
     images{
       url,
       previewUrl
     }
   }
   executives{
     name
     id
     bio
     contactNumber
     email
   }
   article{
     title
     content
     images{
       url,
       previewUrl
     }
   }
 }
  }`;
export default GET_SKILLTRAINING;
