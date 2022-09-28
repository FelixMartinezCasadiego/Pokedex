import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { capitalize } from 'lodash';
import GetColorByPokemonType from '../../utils/GetColorByPokemonType';

export default function Type({types}) {

    return (
        <View style={styles.content} >
 
            <Text>
            </Text>
                {types.map((item,index) =>{
                    return (
                            <View 
                                key={index} 
                                style={{
                                ...styles.pill, 
                                backgroundColor: GetColorByPokemonType(item.type.name)}}
                            >
                                <Text> {capitalize(item.type.name)} </Text>
                            </View>   
                        )
                })}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    }
})