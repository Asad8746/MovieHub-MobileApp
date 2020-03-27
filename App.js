import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainSreen from "./src/screens/MainScreen";
import MovieDetailScreen from "./src/screens/MediaDetailScreen";


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        title:"Movie Hub",
        headerStyle: {backgroundColor:"#36454F"},
        headerTitleStyle :{
          color:"orange",
          fontSize:15,
          fontWeight:"100",
          textTransform:"uppercase"
        }
      }}>
        <Stack.Screen component={MainSreen} name="Main" />
        <Stack.Screen component={MovieDetailScreen} name="Media_Detail" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
