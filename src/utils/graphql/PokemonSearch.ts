"use client";
import gql from "graphql-tag";

const GET_POKEMON = gql`
  query MyQuery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      height
      weight
      base_experience
    }
    pokemon_v2_type(where: { id: { _eq: $id } }) {
      id
      name
    }
    pokemon_v2_move(where: { id: { _eq: $id } }) {
      id
      name
      accuracy
    }
    pokemon_v2_move_by_pk(id: $id) {
      id
      name
      accuracy
    }
    pokemon_v2_berry(where: { id: { _eq: $id } }) {
      id
      natural_gift_power
    }
    pokemon_v2_naturebattlestylepreference(where: { id: { _eq: $id } }) {
      id
      high_hp_preference
    }

    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
      id
      base_happiness
      capture_rate
      hatch_counter
    }
    pokemon_v2_pokemonstat(where: { id: { _eq: $id } }) {
      id
      base_stat
    }
  }
`;

export default GET_POKEMON;
