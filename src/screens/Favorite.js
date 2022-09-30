import { View, Text, Button } from 'react-native';
import React from 'react';
import { getPokemonFavoriteApi } from '../api/favorite';

export default function Favorite() {

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    <View>
      <Text>Fav</Text>
      <Button title='add favorites' onPress={checkFavorites} /> 
    </View>
  )
}