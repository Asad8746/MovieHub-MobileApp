import React from "react";
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from "react-native";
import MovieDetail from "./MovieDetail";
import {withNavigation} from "react-navigation";

const MediaList = ({title,mediaList,navigation}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                keyExtractor={(item)=> item.id.toString()}
                data={mediaList}
                renderItem={({item})=> { 
                  return <TouchableOpacity onPress={()=> {navigation.navigate("Movie_Details",item.id)}}>
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