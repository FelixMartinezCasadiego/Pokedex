import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {

  const {pokemons, LoadPokemons, nextUrl} = props;

  const loadMore = () => {
    LoadPokemons();
  };

  return (
    <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={nextUrl && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          nextUrl && 
          (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />)
        }
    />
  )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
      marginTop: 20,
      marginBottom:60,
      
    }
})