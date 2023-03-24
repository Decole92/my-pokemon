'use client';
import ProfileCard from '@/components/ProfileCard';
import SearchResults from '@/components/SearchResults';
import GET_POKEMON from '@/utils/graphql/PokemonSearch';
import { useQuery } from '@apollo/client';
type Props = {
params: {
   id: number
  }
}
 function page({ params: {id}} : Props) {
 //const {data} = SearchItems(id);
  
 function SearchItems(id: number){
  const { loading, error, data} = useQuery(GET_POKEMON, {
    variables: {id},
  })
  return {loading, error, data};
 }
 const {loading, error, data} = SearchItems(id);
    return (
    <div className='mx-5'>
    <SearchResults  loading={loading} error={error} data={data} />
    {
      data && <ProfileCard pokemon={data} /> 
    }
    </div>
  )
  }
 export default page
