import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Pokedex from '../screens/Pokedex';

const Stack = createNativeStackNavigator;

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <View>
            <Text>PokedexNavigation</Text>
        </View>

    </Stack.Navigator>

  )
}