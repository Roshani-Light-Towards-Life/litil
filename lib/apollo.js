
import { withApollo } from "next-apollo";
import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";
import { GRAPHQL_SERVER } from '../config';
const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);
