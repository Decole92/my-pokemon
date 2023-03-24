import React from 'react'
type Props = {
  data: any
}
function SearchResults({data:pokemons}:Props) {
  if(pokemons?.length === 0){
  console.log('here is the searchresult', pokemons?.length);
    return <p className='text-center items-center top-10'>No result found for this search!!!</p>
   }
  return (
<div></div> 
  )
}

export default SearchResults
