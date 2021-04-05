import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://invoiceappbackend.herokuapp.com/",
  cache: new InMemoryCache({
    // Add tis paramater in order not to add __typename
    // to responses which causes issues with updates
    addTypename: false,
  }),
});

export default client;
