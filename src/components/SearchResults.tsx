import Loading from '@/app/Loading';
import React from 'react'
type Props = {
  loading:boolean;
  error: any;
  data: any
}
function SearchResults({loading, error, data:pokemons}:Props) {
  if(loading) return <Loading />
  if(error) return <p>Error: {error.message}</p>
  if(pokemons?.length === 0){
    return <p className='text-center items-center top-10'>No result found for this search!!!</p>
   }
  return (
<div></div> 
  )
}

export default SearchResults
