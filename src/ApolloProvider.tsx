import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { ReactNode } from "react";
import { setContext } from "@apollo/client/link/context";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2d2t6c3hneWR6dHlsd250eHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2ODI0NzUsImV4cCI6MjAyODI1ODQ3NX0.jGzh2Zjuh4HSKO10klGG6M_1ZLyo-mXyZKtrGj5kZY4";

const httpLink = createHttpLink({
  uri: "https://dvwkzsxgydztylwntxtm.supabase.co/graphql/v1 ",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      apiKey: API_KEY,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function Provider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
