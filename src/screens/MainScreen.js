import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native"
import SearchBar from "../Components/SearchBar";
import MediaList from "../Components/MediaList";

import getMoviesHook from "../hooks/getMovies";




const MainScreen = ({navigation}) => {
    const [term,setTerm] = useState("");
    const [movies,getMovies,error] = getMoviesHook();
    const onSubmit = () => {
        console.log(`${term} submitted`);
        getMovies(term);
    }
    const separateMovies = (mediaType) => {
        return movies.filter((movie)=> {
            return movie.media_type===mediaType;
        })
    }

    return (
        <>
            <SearchBar setTerm={setTerm} onSubmit={onSubmit} term={term}/>
            {error? <Text>{error}</Text> : null}
            <ScrollView>
                <MediaList mediaList={separateMovies("movie")} title="Movies" navigation={navigation}/>
                <MediaList mediaList={separateMovies("tv")} title="Tv Shows" navigation={navigation}/>
                <MediaList mediaList={separateMovies("person")} title="People" navigation={navigation}/>
            </ScrollView>
        </>
    );
}

const styles =  StyleSheet.create({})

export default MainScreen;