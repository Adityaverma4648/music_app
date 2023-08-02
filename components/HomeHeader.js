import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Image, View, Text, Pressable } from "react-native";

import { PlayCircleIcon } from "react-native-heroicons/solid";

const HomeHeader = () => {
  const navigation = useNavigation();

  const headerData = [
    {
      id: 1,
      title: "Discover Your Taste!",
      description: "Over 50K songs available...",
      uri: "https://en.pimg.jp/093/102/444/1/93102444.jpg",
      Link: "Discover",
    },
    {
      id: 2,
      title: "Search songs which makes you groove!",
      description: "Search by artist,genre,top charts....",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P5qK9dt3f9u4SY2QXqOEfH6cC2noK-To4w&usqp=CAU",
      Link: "Search",
    },
    {
      id: 3,
      title: "Save what you love!",
      description: "Hear them as many times you want...",
      uri: "https://i.scdn.co/image/ab67616d0000b273f341e285f214ea930c4abaf7",
      Link: "Library",
    },
    {
      id: 4,
      title: "Do you love concerts?",
      description: "We bring latest news and book tickets...",
      uri: "https://i.scdn.co/image/ab67616d00001e0268821f1812f184012e5f3248",
      Link: "Concert",
    },
    {
      id: 5,
      title: "Save Playlists to enjoy them anytime!",
      description: "Loop them all over...",
      uri: "https://as1.ftcdn.net/v2/jpg/01/83/22/68/1000_F_183226863_RsWMhboDiXhT8TLeExbNEtiKFWnVF0hW.jpg",
      Link: "",
    },
  ];

  return (
    <View
      style={{
        height: 200,
        width: undefined,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          height: 200,
          position: "relative",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <ScrollView horizontal style={{ height: "100%", position: "relative" }}>
          {headerData?.map((d, index) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate(d.Link);
                }}
                key={index}
                style={{
                  width: undefined,
                  height: "100%",
                  backgroundColor: "#a52a2a",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    bottom: 0,
                    left: 0,
                    zIndex: 10,
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "85%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      // backgroundColor : "red",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "700",
                          color: "#fff",
                        }}
                      >
                        {d.title}
                      </Text>
                      <Text style={{ color: "rgba(255,255,255,0.8)" }}>
                        {d.description}
                      </Text>
                    </View>

                    <View style={{ padding: 10 }}>
                      <Pressable onPress={() => {}}>
                        <PlayCircleIcon size={45} color="#fff" />
                      </Pressable>
                    </View>
                  </View>
                </View>

                <View style={{ position: "relative", zIndex: 1 }}>
                  <Image
                    source={{
                      uri: d.uri,
                    }}
                    alt={d.title}
                    style={{ height: "100%", width: 435 }}
                  ></Image>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeHeader;
