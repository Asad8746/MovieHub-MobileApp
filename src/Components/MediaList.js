import React from "react";
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from "react-native";
import MovieDetail from "./MovieDetail";

const MediaList = ({title,mediaList,navigation,navigateTo}) => {
    if(mediaList.length===0) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                keyExtractor={(item)=> item.id.toString()}
                data={mediaList}
                renderItem={({item})=> { 
                  return <TouchableOpacity onPress={()=> {navigation.navigate("Media_Detail",{id : item.id,navigateTo})}}>
                        <MovieDetail media={item}/>
                    </TouchableOpacity>}
                }
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    title : {
        fontSize:18,
        color:"#555",
        textTransform:"uppercase",
        textAlign:"center",
        marginVertical:5,
        fontWeight:"bold"
    }
})


export default MediaList