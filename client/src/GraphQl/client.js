import ApolloClient from 'apollo-boost';
const graphQlURL = 'http://localhost:3000/graphql'

export const client = new ApolloClient({
  uri: graphQlURL,
});