import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, Image, Pressable, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

//  importing data
import worldCharts from "../data/worldCharts.json";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
} from "react-native-heroicons/solid";

import { HeartIcon } from "react-native-heroicons/outline";

//  audio

import AudioPlayer from "../components/AudioPlayer";

const SingleDiscoverScreen = ({ route }) => {
  const navigation = useNavigation();
  const [key, setKey] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (route.params) {
      setKey(route.params);
    }

    const filtered = worldCharts.filter((d) => {
      return d.key == key;
    });

    setData(filtered);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "rgba(0,0,0,1)",
      }}
    >
      {data.map((d) => {
        return (
          <View
            key={d.key}
            style={{
              height: "90%",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "10%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: 15,
              }}
              id="header"
            >
              <Pressable onPress={() => {}}>
                <ChevronDownIcon color="#fff" />
              </Pressable>

              <View
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "rgba(255,255,255,0.6)" }}>
                  PLAYING FROM DISCOVER
                </Text>
                <Text style={{ fontSize: 20, color: "rgba(255,255,255,0.8)" }}>
                  {d.artists[0].alias}
                </Text>
              </View>

              <Pressable onPress={() => {}}>
                <EllipsisVerticalIcon color="#fff" />
              </Pressable>
            </View>

            <View
              style={{
                height: "60%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
              }}
            >
              <View style={{ width: "95%" }}>
                <Image
                  source={{ uri: d.images.background }}
                  style={{ height: "100%", width: "100%" }}
                ></Image>
              </View>
            </View>

            <View
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
              }}
            >
              <View
                style={{
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "85%", padding: 5 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                      {d.title}
                    </Text>
                    <Text style={{ color: "white" }}>{d.artists[0].alias}</Text>
                  </View>
                  <View
                    style={{
                      width: "15%",
                      display: "flex",
                      justifyContent: " center",
                      alignItems: "center",
                    }}
                  >
                    <Pressable onPress={() => {}}>
                      <HeartIcon color="#fff" />
                    </Pressable>
                  </View>
                </View>

                <AudioPlayer uri={d.url} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SingleDiscoverScreen;
