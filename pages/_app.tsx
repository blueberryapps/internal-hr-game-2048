import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { theme } from "../styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";

const httpLink = new HttpLink({
  uri: "https://hiring-backend-2048.herokuapp.com/admin/api",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  // add the authorization to the headers
  if (token) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
