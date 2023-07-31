import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import worldCharts from "../data/worldCharts.json";
const DiscoveryScreen = () => {
  const [data, setData] = useState(worldCharts);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    //  axios
    //    .get("https://shazam-core.p.rapidapi.com/v1/charts/genre-world", {
    //      params: { genre_code: "POP" },
    //      headers: {
    //        "X-RapidAPI-Key":
    //          "4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae",
    //        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    //      },
    //    })
    //    .then((res) => {
    //      setData(res.data);
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#ffc02e",
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
          justifyContent: "center",
          itemsCenter: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "700" }}>Sort by</Text>

        {/* <select name="genre" id="genre">
            map options
         </select> */}
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
              <View
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
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoveryScreen;
