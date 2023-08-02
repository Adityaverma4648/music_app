import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//  import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//  importing screens
import HomeScreen from "./screen/HomeScreen";
import DiscoverScreen from "./screen/DiscoverScreen";
import SearchScreen from "./screen/SearchScreen";
import LibraryScreen from "./screen/LibraryScreen";
import LikedScreen from "./screen/LikedScreen";
import ConcertScreen from "./screen/ConcertScreen";
import RecentScreen from "./screen/RecentScreen";
import SingleDiscoverScreen from "./screen/SingleDiscoverScreen";
import NotificationScreen from "./screen/NotificationScreen";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />

        <Stack.Screen name="DiscoverUnique" component={SingleDiscoverScreen} />

        <Stack.Screen name="Search" component={SearchScreen} />
         <Stack.Screen
          name="Liked"
          component={LikedScreen}
        /> 
        <Stack.Screen
          name="Library"
          component={LibraryScreen}
        /> 
         <Stack.Screen
          name="Concert"
          component={ConcertScreen}
        /> 
         <Stack.Screen
          name="Recent"
          component={RecentScreen}
        /> 
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
        /> 
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
