import React from "react";
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import MainSreen from "./src/screens/MainScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen component={MainSreen} name="Main" options={{title:"Movie Hub"}}/>
        <Stack.Screen component={MovieDetailScreen} name="Movie_Details" options={{title:"Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
