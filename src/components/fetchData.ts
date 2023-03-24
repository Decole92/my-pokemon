'use client';
import QUERY from "@/utils/graphql/Poke";
import { useQuery } from "@apollo/react-hooks";
type Props = {
    loading:boolean;
    error:any;
    data:any;
}
const fetchData = () => {
    const {loading, error, data} = useQuery(QUERY, {
     variables: {limit: 151},
    })
      console.log('coming from func', data?.pokemon_v2_pokemon);
      return data?.pokemon_v2_pokemon;
    }
    export default fetchData;