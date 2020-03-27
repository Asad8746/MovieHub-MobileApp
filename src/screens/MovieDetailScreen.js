import React,{useState,useEffect} from "react";
import {View,Text,Image,FlatList,StyleSheet,ListView} from "react-native";
import MovieDbApi from "../Api/theMoviedb";


const MovieDetailScreen = ({route}) => {
    const [result,setResult] = useState("");
    const [error,setError] = useState("")
    const id = route.params;
    const getMovie = async()=> {
        let response =  await MovieDbApi.get(`/movie/${id}`,
        {
            params:{api_key : "8cd514344b5f41bcbf02e17a60406817"}
        })
        setResult(response.data);
        setError("")
    }

    useEffect(()=> {
        getMovie();    
    },[])

    return (
        <View>
            {error ? <Text>{error}</Text> : null}
            <Text style={styles.title}>{result.title ? result.title : result.name}</Text>
            <Image source={{uri:`https://image.tmdb.org/t/p/original/${result.poster_path ? result.poster_path : result.profile_path}`}}  style={styles.image}/>
    <Text>OverView : {result.overview}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title : {
        fontSize:18,
        fontWeight:"bold",
        color:"#555",
        textAlign:"center",
        padding:10,
        marginVertical:5
    },
    image : {
        height:200,
        width:420,
        alignSelf:"center"

    }
})

export default MovieDetailScreen;