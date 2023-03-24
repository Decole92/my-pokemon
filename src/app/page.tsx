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

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const {loading, error, data} = SearchItems(searchTerm);

 function SearchItems(searchTerm: string ) {
 const { loading, error, data} = useQuery(POKEMON_QUERY, {
 variables: { limit: 151, name:searchTerm }
    });
  return {loading, error, data: data?.pokemon_v2_pokemon}
  }
  
  function handleSearch(searchTerm:string) {
    setSearchTerm(searchTerm);
  }
   
    return (
    <div className='mx-7'>
     <SearchBar onSearch={handleSearch} />
     {searchTerm ? <Filter /> : <Subheader /> }
     <SearchResults loading={loading} error={error} data={data} />
    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full'>
    {data && data?.map((pokemon: PokemonData) => 
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

