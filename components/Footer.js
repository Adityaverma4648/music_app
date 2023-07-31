import React from "react";
import { View, Text , Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

//  import icons 
import { BookmarkSquareIcon, GlobeAltIcon, HomeIcon, MagnifyingGlassIcon, TicketIcon } from "react-native-heroicons/outline";

const Footer = () => {
  
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "white",
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection : "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{display : "flex" , justifyContent: "center" ,alignItems : "center"}}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <HomeIcon size={30} style={{ color: "#000", fontWeight: "700" }} />
        <Text style ={{fontSize : 12 ,fontWeight : 700}}>Home</Text>
      </Pressable>


      <Pressable
        style={{display : "flex" , justifyContent: "center" ,alignItems : "center"}}
        onPress={() => {
          navigation.navigate('Discover')
        }}
      >
        <GlobeAltIcon size={30} style={{ color: "#000", fontWeight: "700" }} />
        <Text style ={{fontSize : 12 ,fontWeight : 700}}>Discover</Text>

      </Pressable>


      <Pressable
        style={{display : "flex" , justifyContent: "center" ,alignItems : "center"}}
        onPress={() => {
          navigation.navigate('Search')
        }}
      >
        <MagnifyingGlassIcon size={30} style={{ color: "#000", fontWeight: "700" }} />
        <Text style ={{fontSize : 12 ,fontWeight : 700}}>Search</Text>

      </Pressable>



      <Pressable
        style={{display : "flex" , justifyContent: "center" ,alignItems : "center"}}
        onPress={() => {
          navigation.navigate('Library')
        }}
      >
        <BookmarkSquareIcon size={30} style={{ color: "#000", fontWeight: "700" }} />
        <Text style ={{fontSize : 12 ,fontWeight : 700}}>Library</Text>

      </Pressable>

      <Pressable
        style={{display : "flex" , justifyContent: "center" ,alignItems : "center"}}
        onPress={() => {
          navigation.navigate('Concert')
        }}
      >
        <TicketIcon size={30} style={{ color: "#000", fontWeight: "700" }} />
        <Text style ={{fontSize : 12 ,fontWeight : 700}}>Concerts</Text>

      </Pressable>


    </View>
  );
};

export default Footer;
