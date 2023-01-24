import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ApolloProvider,} from "@apollo/client";
import {theme} from "../styles/muiTheme";
import {ThemeProvider} from "@mui/material/styles";
import {AuthProvider} from "../lib/auth";
import {useApollo} from "../lib/apolloClient";
import {Layout} from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Layout>
             <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
