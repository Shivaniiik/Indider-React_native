import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Event() {
  return (
    <>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          EVENTS THIS WEEK
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20 }}>
        <View style={styles.event1}>
          <Text style={{ color: "#800000", fontWeight: "600" }}>Today</Text>
          <Text style={{ color: "gray", fontWeight: "600" }}>Sun, 26 Mar</Text>
        </View>

        <View style={styles.event1}>
          <Text style={{ color: "#800000", fontWeight: "600" }}>Tomorrow</Text>
          <Text style={{ color: "gray", fontWeight: "600" }}>Sun, 26 Mar</Text>
        </View>
        <View style={styles.event1}>
          <Text style={{ color: "#800000", fontWeight: "600" }}>Weekend</Text>
          <Text style={{ color: "gray", fontWeight: "600" }}>Sun, 26 Mar</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  event1: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d3d3d3",
    padding: 10,
    marginRight: 15,
  },
});
