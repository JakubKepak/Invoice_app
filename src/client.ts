import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // uri: "https://invoiceappbackend.herokuapp.com/",
  uri: "http://localhost:5000/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token") || null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    // Add tis paramater in order not to add __typename
    // to responses which causes issues with updates
    addTypename: false,
  }),
});

export default client;
