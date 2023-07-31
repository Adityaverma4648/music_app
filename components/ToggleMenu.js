import React from 'react';
import {SafeAreaView , Text , View , Pressable } from "react-native";

// import icons
import { XMarkIcon } from "react-native-heroicons/solid";

const ToggleMenu = ({onChangeVisible}) => {
  return (
    <SafeAreaView
    style={{
      height: 850,
      width: "100%",
      backgroundColor: "blue",
      zIndex: 2000,
      position: "absolute",
      // padding : 20
    }}
  >
    {/*  close button */}
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 15,
        marginTop: 15,
      }}
    >
      <Pressable
        onPress={() => {
          onChangeVisible(false);
        }}
        style={{ cursor: "pointer" }}
      >
    
          <XMarkIcon
            size={30}
            style={{ color: "#000", fontWeight: "700" }}
          />
    
      </Pressable>
    </View>

    {/*  navbar */}
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
    </View>
  </SafeAreaView>
  )
}

export default ToggleMenu;