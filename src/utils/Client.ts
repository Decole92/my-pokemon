'use client';
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    uri: "https://beta.pokeapi.co/graphql/v1beta"
})
export default client;