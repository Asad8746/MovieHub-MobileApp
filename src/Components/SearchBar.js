import React from "react";
import {View,TextInput,StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons"

const SearchBar = ({setTerm,onSubmit,term}) => {
    return ( 
    <View style={styles.bg}>
        <Feather name="search" style={styles.icon} />
        <TextInput
            style={styles.input} 
            placeholder="Search your Favourite Movie" 
            autoCorrect={false} 
            autoCapitalize="none" 
            value={term}
            onChangeText={(value)=> setTerm(value)}
            onEndEditing={()=> {onSubmit()}}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    bg : {
        flexDirection:"row",
        backgroundColor:"rgb(221, 220, 220)",
        height:50,
        borderRadius:4,
        marginBottom:10
    },
    input : {
        flex:1,
        color:"#555",
        fontSize:18,
        paddingLeft:10
    },
    icon : {
        alignSelf:"center",
        fontSize:20,
        backgroundColor:"#555",
        padding:15,
        color:"white"
    }
})


export default SearchBar;