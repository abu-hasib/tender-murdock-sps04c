import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createClient, defaultExchanges, fetchExchange, Provider } from "urql";
import { devtoolsExchange } from "@urql/devtools";
import GlobalStyles from "./styles";
import Pages from "./pages";

// const oldClient = new ApolloClient({
//   uri: "https://space-courses-api.herokuapp.com/", // change to YOUR own production server
//   cache: new InMemoryCache(),
//   name: "web",
//   version: "1.0",
// });

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [devtoolsExchange, fetchExchange],
});

ReactDOM.render(
  <Provider value={client}>
    <GlobalStyles />
    <Pages />
  </Provider>,
  document.getElementById("root")
);
