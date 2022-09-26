import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { getPokemonApi , getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await LoadPokemons();
    }) ();
  }, [])
  
  const LoadPokemons = async () => {
    try {
      const response = await getPokemonApi();

      const pokemonArray = [];
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }

      setPokemons([...pokemons, ...pokemonArray]);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}