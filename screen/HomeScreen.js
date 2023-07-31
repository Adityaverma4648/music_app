import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, Image, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import worldCharts from "../data/worldCharts";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(worldCharts);
  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    //  axios.get('https://shazam-core.p.rapidapi.com/v1/charts/genre-world',{
    //   params: {genre_code: 'POP'},
    //   headers: {
    //     'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
    //     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    //   }}).then((res)=>{
    //     console.log(res);
    //     setData(res.data)
    //   }).catch((err)=>{
    //        console.log(err);
    //   })
  }, []);

  const headerData = [
    {
      id: 1,
      title: "",
      description: "",
      uri: "https://en.pimg.jp/093/102/444/1/93102444.jpg",
    },
    {
      id: 2,
      title: "",
      description: "",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P5qK9dt3f9u4SY2QXqOEfH6cC2noK-To4w&usqp=CAU",
    },
    {
      id: 3,
      title: "",
      description: "",
      uri: "https://i.scdn.co/image/ab67616d0000b273f341e285f214ea930c4abaf7",
    },
    {
      id: 4,
      title: "",
      description: "",
      uri: "https://i.scdn.co/image/ab67616d00001e0268821f1812f184012e5f3248",
    },
    {
      id: 5,
      title: "",
      description: "",
      uri: "https://as1.ftcdn.net/v2/jpg/01/83/22/68/1000_F_183226863_RsWMhboDiXhT8TLeExbNEtiKFWnVF0hW.jpg",
    },
  ];

  return (
    <SafeAreaView style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" }} >
      <ScrollView
        style={{
          width: undefined,
          height: "100%",
          display: "flex",
          flexDirection : "column",
          backgroundColor: "#ffc02e",
        }}
      >
        {/*  Home header  */}
         <HomeHeader />

        {/*  home Recently Played */}
        <View
          style={{
            // height: "100%",
            width: "100%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Text>
            {JSON.stringify(data)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
