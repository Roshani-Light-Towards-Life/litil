import gql from 'graphql-tag';

const GET_STUDENTS_COUNT = gql`
    {
        studentsCount
    }
`;

export default GET_STUDENTS_COUNT;