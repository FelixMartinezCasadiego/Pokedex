import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {capitalize} from "lodash";
import GetColorByPokemonType from '../utils/GetColorByPokemonType';

export default function PokemonCard(props) {

    const {pokemon} = props;

    const PokemonColor = GetColorByPokemonType(pokemon.type);

    const bgStyles = {backgroundColor: PokemonColor, ...styles.bgStyles};

    const goToPokemon = () => {
        console.log(`go to pokemon: ${pokemon.name}`)
    }

    return (

        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card} >
                <View style={styles.spacing} >
                    <View style={bgStyles} >
                        <Text style={styles.number} > 
                            #{`${pokemon.order}`.padStart(3,0)} 
                        </Text>
                        <Text style={styles.name} > {capitalize(pokemon.name)} </Text>
                        <Image source={{uri: pokemon.image}} style={styles.image} />
                    </View>
                    
                </View>  
            </View>  
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
    },
    number: {
        position: "absolute",
        right: 1,
        top: 10,
        color:"#fff",
        fontSize: 11,
    },
    image: {
        position: 'absolute' ,
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },

})