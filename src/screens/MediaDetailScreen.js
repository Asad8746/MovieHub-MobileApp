import React,{useState,useEffect} from "react";
import {Text,Image,StyleSheet,ScrollView} from "react-native";
import MovieDbApi from "../Api/theMoviedb";


const MediaDetailScreen = ({route}) => {
    const [result,setResult] = useState("");
    const [error,setError] = useState("")
    const {id,navigateTo} = route.params;
    const getMovie = async()=> {
        let response =  await MovieDbApi.get(`/${navigateTo}/${id}`,
        {
            params:{api_key : "<apikey>"}
        })
        setResult(response.data);
        setError("")
    }
    useEffect(()=> {
        getMovie();    
    },[])
    if(!result) {return <Text>Loading</Text>}
    return (
        <>
            {error ? <Text>{error}</Text> : null}
            <Text style={styles.title}>{result.title ? result.title : result.name}</Text>
            <ScrollView>
                <Image source={{uri:`https://image.tmdb.org/t/p/original/${result.poster_path ? result.poster_path : result.profile_path}`}}  style={styles.image}/>
                <Text style={styles.movieOverviewTitle}>{result.overview? "Overview": "Biography" }</Text>
                <Text style={styles.movieTextStyle}> {result.overview? `${result.overview}`: `${result.biography}` }</Text>
                <Text style={styles.movieTextStyle}>{result.release_date? `Release Date : ${result.release_date}`: `Name : ${result.name}` }</Text>
                <Text style={styles.movieTextStyle}>{result.vote_count? `Total : ${result.vote_count}`: `Place of Birth : ${result.place_of_birth}` }</Text>
                <Text style={styles.movieTextStyle}>{result.vote_average? `Vote Average : ${result.vote_average}`: `Birthday : ${result.birthday}` }</Text>
                <Text style={styles.movieTextStyle}>Popularity : {result.popularity}</Text>
                <Text style={styles.movieTextStyle}>{result.status? `Status : ${result.status}`: `Death Day : ${result.deathday ? result.deathday : "Alive"}`}</Text>
            </ScrollView>
        </>
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

    },
    movieOverviewTitle : {
       fontSize:16,
       padding:5,
       alignSelf:"center"
    },
    movieTextStyle : {
        fontSize:12,
        textAlign:"justify",
        padding:10,
        borderTopColor:"#555",
        borderTopWidth:1
    }
})

export default MediaDetailScreen;