'use client';
import gql from "graphql-tag";

const POKEMON_QUERY = gql `
query MyQuery ($limit:Int!, $name: String!){
  pokemon_v2_pokemon(limit: $limit, where: {id: { _lt: 152}, name: {_regex: $name}}) {
    id
    name
    height
    weight
  }
}
`;
export default POKEMON_QUERY;

