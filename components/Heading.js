import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function heading() {
  return (
    <View style={styles1.head}>
      <Text style={styles1.title}>STEP OUT</Text>
      <Text style={{color: 'gray'}}>Mumbai is opening up again.</Text>
      <Text style={{color: 'gray'}}>Find safe and exciting events around you.</Text>
    </View>
  );
}

const styles1 = StyleSheet.create({
  head: {
    marginLeft: 20,
    marginTop: 0,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
