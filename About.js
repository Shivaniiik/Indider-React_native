import React from "react";
import { Image, StyleSheet, Text, ScrollView, View } from "react-native";
import ARrahman from "./components/ARrahman";
import Detail from "./components/Detail";
import Toggle from "./components/Toggle";
import Stepout from "./components/Stepout";

export default function About() {
  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677325824%2Fwsvnekmmtjeijbutoaoa.png",
        }}
        style={{ height: 200, width: 360 }}
      />
      <Text style={styles.about}>About</Text>
      <View
        style={{ borderBottomColor: '#e3e5e7', borderWidth: 2, width: 50, marginLeft: 20 ,marginTop: 5}}
      ></View>
      <ARrahman />
      <Detail />
      <Toggle />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 30,
          marginLeft: 20,
        }}
      >
        YOU MAY LOVE THESE TOO
      </Text>
      <Stepout />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  about: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 0,
    fontWeight: "bold",
    fontSize: 20,
  },
});
