import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, Image, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

//  import icons 
import {BellAlertIcon, HeartIcon, History} from "react-native-heroicons/solid";

// import linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

// importing data 
import worldCharts from "../data/worldCharts";

// import components
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(worldCharts);
  const [play, setPlay] = useState(false);
  const [greet, setGreet] = useState('');

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

    const time = new Date();
    const hours = time.getHours();
    if(hours < 12)
       setGreet('Good Morning!')
    else if(hours >= 12 && hours <= 17)
       setGreet('Good AfterNoon!')
    else if(hours >= 17 && hours <= 20)
       setGreet('Good Evening!')
    else
       setGreet('Good Night!')
  }, []);

  const options = [{
    id : 1,
    title : "Recent",
    link : "Recent",
    icon :  '<History color="#fff" />'
  } ,{
    id : 2,
    title : "Liked",
    link : "Liked",
    icon : '<HeartIcon color="#fff" />'
  }]

  const recent = [{}];

  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffc02e",
        }}
      >
        {/*  Home header  */}
        <HomeHeader />

        {/*  home Recently Played and Library*/}
        <LinearGradient
          colors={["rgba(0,0,0,1)", "#434343"]}
          style={{
            height: 250,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            {/*  header */}
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {/* greeting */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}
                >
                  {greet}
                </Text>
              </View>
              <View>
                {/* notification */}
                <Pressable
                  onPress={() => {
                    navigation.navigate("Notification");
                  }}
                >
                  <BellAlertIcon color="#fff" />
                </Pressable>
              </View>
            </View>

            {/*  options */}
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
              }}
            >
              {options?.map((d, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate(`${d.link}`);
                    }}
                    style={{
                      width: "48%",
                      height: 50,
                      backgroundColor: "rgba(80,80,80,1)",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5,
                    }}
                  >
                    <View>{/* {d.icon} */}</View>
                    <View>
                      <Text style={{ color: "#fff" }}>{d.title}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </LinearGradient>

        {/* songs */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
