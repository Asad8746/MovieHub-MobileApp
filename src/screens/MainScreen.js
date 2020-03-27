import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native"

import SearchBar from "../Components/SearchBar";
import MediaList from "../Components/MediaList";

import getMoviesHook from "../hooks/getMovies";




const MainScreen = ({navigation}) => {
    const [term,setTerm] = useState("");
    const [movies,getMovies,error] = getMoviesHook();
    const onSubmit = () => {
        getMovies(term);
    }
    const separateMedia = (mediaType) => {
        return movies.filter((movie)=> {
            return movie.media_type===mediaType;
        })
    }
    const renderList = () => {
        return (
        <ScrollView>
            <MediaList mediaList={separateMedia("movie")} title="Movies" navigation={navigation} navigateTo="movie"/>
            <MediaList mediaList={separateMedia("tv")} title="Tv Shows" navigation={navigation} navigateTo="tv"/>
            <MediaList mediaList={separateMedia("person")} title="People" navigation={navigation} navigateTo="person"/>
        </ScrollView>
        )    
}
    return (
        <>
            <SearchBar setTerm={setTerm} onSubmit={onSubmit} term={term}/>
            {error? <Text>{error}</Text> : null}
            {!term? <Text style={styles.textStyle}>Please Search your Favourite Movie or Show</Text>
            :
            renderList()
            }
 </>
    );
}

const styles =  StyleSheet.create({
    textStyle : {
        alignSelf:"center"
    }
})

export default MainScreen;