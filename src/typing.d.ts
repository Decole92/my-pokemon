type PokemonData = {
    id: string,
    name:string,
    image: string,
    height: number,
    weight: number,
  }

  type PokemonSingle = {
    id: string,
    name:string,
    height: number,
    weight: number,
    base_experience:number,
    pokemon_v2_type: {
      name: string;
    }
  }