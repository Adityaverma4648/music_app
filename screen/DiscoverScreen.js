import React, { useState, useEffect, useLayoutEffect } from "react";

//   native packages

import { Text, Image, View, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

// importing data 
import worldCharts from "../data/worldCharts.json";

// importing linear gradients 
import { LinearGradient } from "expo-linear-gradient";

import axios from "axios";

const DiscoveryScreen = () => {

  const [data, setData] = useState(worldCharts);
  const [selectedValue, setSelectedValue] = useState("sort");
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
     axios
       .get("https://shazam-core.p.rapidapi.com/v1/charts/genre-world", {
         params: { genre_code: selectedValue },
         headers: {
           "X-RapidAPI-Key":
             "4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae",
           "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
         },
       })
       .then((res) => {
         setData(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
  }, [selectedValue]);

  const genre = ['POP','HIP_HOP_RAP','DANCE','ELECTRONIC','SOUL_RNB','ALTERNATIVE','ROCK','LATIN','FILM_TV','COUNTRY','AFRO_BEATS','WORLDWIDE','REGGAE_DANCE_HALL','HOUSE','K_POP','FRENCH_POP','SINGER_SONGWRITER','REG_MEXICO']

  return (
    <LinearGradient
      colors={["#ce78f0", "#ff70a0", "#ffc02e"]}
      style={{
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems : "flex-end",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          // backgroundColor: "red",
        }}
      >
        <Text style={{width:"50%", fontSize: 25, fontWeight: "700" }}>Discover </Text>

        <View style={{height : 40 , width : "35%" }}>
           <Picker selectedValue={selectedValue}  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} > 
              {genre?.map((d ,index )=>{
                  return <Picker.Item key={index} value={d} label={d} style={{fontWeight: "700"}} />
              })}
           </Picker>
        </View>
      </View>

      <ScrollView
        style={{
          height: "80%",
          width: "100vw",
          display: "flex",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((d) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate(`DiscoverUnique`, d.key);
                }}
                key={d.key}
                style={{
                  height: 300,
                  width: 200,
                  backgroundColor: "red",
                  margin: 2,
                }}
              >
                <View style={{ height: "100%", width: "100%" }}>
                  <Image
                    source={{
                      uri: d.images.background,
                    }}
                    alt="image"
                    style={{ height: "100%", width: "100%" }}
                  ></Image>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DiscoveryScreen;
