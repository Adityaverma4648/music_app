import React, { useEffect, useState } from "react";
import { Text, View, Pressable, TextInput, SafeAreaView } from "react-native";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [text, onChangeText] = useState("");

  const onChangeVisible = (data) => {
    setVisible(data);
  };

  return (
    <>
      {/* LOGO && searchbar && toggleMenubar  */}

      <View
        style={{
          width: "100%",
          height: 50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999,
          marginTop: 24,
          color : "white"
        }}
      >
        <View
          style={{
            width: "95%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.7)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
            borderRadius: 3,
            alignItems: "center",
          }}
        >
          {/*  logo */}
          <View>
            <Text style={{color : "#000", fontSize: 25, fontWeight: "700" }}>Music</Text>
          </View>

          {/*  the space betweeen  */}
          <View
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/*  search button */}
            <Pressable
              style={{ margin: 4 }}
              onPress={() => {
                setSearchBar(!searchBar);
              }}
            >
              {searchBar ? (
                <MagnifyingGlassIcon
                  size={30}
                  style={{ color: "#000", fontWeight: "700" }}
                />
              ) : (
                <View
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/*  the search input */}
                  <TextInput
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    style={{
                      width: 200,
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,0.2)",
                      borderRadius: 5,
                      height: 40,
                      color: "#000",
                      padding: 5,
                      backgroundColor : "white"
                    }}
                    value={text}
                    onChange={onChangeText}
                    placeholder="Search songs by..."
                  ></TextInput>

                  {/*  searchBar button */}
                  <Pressable
                    onPress={() => {
                      setSearchBar(!searchBar);
                    }}
                  >
                    <XMarkIcon
                      size={30}
                      style={{ color: "#000", fontWeight: "700" }}
                    />
                  </Pressable>
                </View>
              )}
            </Pressable>

            {/*  toogle navbar */}
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}
              style={{ cursor: "pointer" }}
            >
              <Bars3BottomRightIcon
                size={30}
                style={{ color: "#000", fontWeight: "700" }}
              />
            </Pressable>
          </View>
        </View>
      </View>

      {/* toggle menu header */}
      {visible && <ToggleMenu onChangeVisible={onChangeVisible} />}
    </>
  );
};

export default Navbar;
