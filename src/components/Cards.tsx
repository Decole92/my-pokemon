import Image from 'next/image'

type Props = {
    pokemon: PokemonData
}

function Cards({pokemon}: Props) {
  return (
    <div className=''>
        <div className='bg-white space-y-3 rounded-lg shadow-lg '>
          <Image src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt="logo_pic" 
             height={70} width={70}  className='object-contain h-40 py-4 w-full items-center'/>
            <div className='bg-[#FF3E4E] py-3 rounded-b-lg'>
            <h2 className='text-center text-white'>{pokemon.name}</h2>
          </div>
        </div>
    </div>
  )
}

export default Cards