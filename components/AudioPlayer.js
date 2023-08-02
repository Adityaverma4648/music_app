import React from "react";
import { View , Text , Pressable } from "react-native";

import {
  PlayCircleIcon,
} from "react-native-heroicons/solid";
import { Audio } from "expo-av";

const AudioPlayer = ({uri}) => {

  const audio = new Audio.Sound();

  const handlePlayPause = async (uri) => {
   
    try {
      if (audio._loaded) {
        if (audio._playing) {
          await audio.pauseAsync();
        } else {
          await audio.playAsync();
        }
      } else {
        await audio.loadAsync({ uri: uri });
        await audio.playAsync();
      }
    } catch (error) {
      console.log('Error playing audio: ', error);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          handlePlayPause(uri);
        }}
      >
        <PlayCircleIcon color="#fff" size={80} />
      </Pressable>
    </View>
  );
};

export default AudioPlayer;
