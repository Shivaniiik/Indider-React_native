import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import Navbar from "./components/Navbar";
//import Login from "./Login";
import Slider from "./components/Slider";
import Stepout from "./components/Stepout";
import Heading from "./components/Heading";
import Gridimg from "./components/Gridimg";
import Gridcard from "./components/Gridcard";
import Event from "./components/Event";
import Magazine from "./components/Magazine";
import Artists from "./components/Artists";
import Venues from "./components/Venues";


export default function Home() {
  return (
    <>
      <ScrollView>
        <StatusBar style="auto" backgroundColor="white" />
        <Navbar />
  {/*}      <Login/>*/}
        <Slider />
        <Heading />
        <Stepout  />
        <Gridimg />
        <Gridcard />
        <Event />
        <Magazine />
        <Artists />
        <Venues />
      </ScrollView>
    </>
  );
}
