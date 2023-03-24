'use client';
import gql from "graphql-tag";

const QUERY = gql `
query MyQuery ($limit:Int!){
  pokemon_v2_pokemon(limit: $limit, where: {id: { _lt: 152}}) {
    id
    name
    height
    weight
  }
}
`;
export default QUERY;

