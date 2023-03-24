'use client';
import { useQuery } from "@apollo/client";
import Cards from '@/components/Cards';
import SearchBar from '@/components/SearchBar';
import Subheader from '@/components/SubHeader';
import POKEMON_QUERY from "@/utils/graphql/Pokemons";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchResults from "@/components/SearchResults";
import Filter from "@/components/Filter";
import fetchData from "@/components/fetchData";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  
function SearchItems(searchTerm: string ) {
   const { loading, error, data} = useQuery(POKEMON_QUERY, {
   variables: { limit: 151, name:searchTerm }
    });
   return data?.pokemon_v2_pokemon;
   }
  
  function handleSearch(searchTerm:string) {
    setSearchTerm(searchTerm);
  }
    const pokemons = searchTerm !== '' ? SearchItems(searchTerm) : fetchData();
    
     return (
    <div className='mx-7'>
     <SearchBar onSearch={handleSearch} />
     {searchTerm ? <Filter /> : <Subheader /> }
     <SearchResults data={pokemons} />
    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full'>
    {pokemons && pokemons?.map((pokemon: PokemonData) => 
     <Link href={`Profile/${pokemon.id}`} key={pokemon.id} className=''>
     <Cards pokemon={pokemon} /> 
     </Link>
    )
    }
    </div>
    </div>
  )
}

export default Homepage;

