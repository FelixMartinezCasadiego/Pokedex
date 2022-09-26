import { POKEMON_TYPE_COLORS } from './constants';

const GetColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default GetColorByPokemonType;