import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AddPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';


export default function Favorite({id}) {

    const [isFavorite, setIsFavorite] = useState(undefined); 

    const [reloadCheck, setReloadCheck] = useState(false);

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
      
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false)
            }
        })();
    
    }, [id, reloadCheck]);

    const onReloadCheckFavorite = () =>{
        setReloadCheck((prev) => !prev)
    };

    const addFavorite = async () => {
        try {
            await AddPokemonFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    };

    
    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <Icon 
            name='heart' 
            color="#fff" size={20} 
            onPress={isFavorite ? removeFavorite : addFavorite} 
            style={styles.marginFavorite}   
        />

    )
}

const styles = StyleSheet.create({
    marginFavorite: {
        marginRight: 20,
    },
})