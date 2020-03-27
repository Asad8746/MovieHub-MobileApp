import React,{useState,useEffect} from "react";
import {View,Text,Image,StyleSheet} from "react-native";
import MovieDpApi from "../Api/theMoviedb";


const MovieDetail = ({media}) => {
    
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.title   }>{media.title ? media.title : media.name}</Text>
            <Image source={{uri:`https://image.tmdb.org/t/p/original/${media.poster_path ? media.poster_path : media.profile_path}`}}  style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle : {
        marginHorizontal:15,
        paddingVertical:10
    },
    title: {
        fontSize:16,
        marginBottom:10,
        textAlign:"center",
        color:"#555"
    },
    image : {
        height:200,
        width:300
    }
})

export default MovieDetail;