import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Gridimg() {
  const colordata = [
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671110194%2Fmy9sn0elwrdiga0bdaft.png",
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1623313209%2Fwjapklp7hrnalamjkvad.png",
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1625122458%2Fzi16tkrn0qqs84d92hah.png",
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671187953%2Fputphvcf3eqajqcrchn8.png",
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671187157%2Fz8nydm5tr0wtrtvwzyrq.png",
    "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_180/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671484417%2Ffm0y9xe0ozzxylrip9ew.png",
  ];
  return (
    <>
      <View style={styles.cardimg}>
        <Text style={{ fontWeight: 'bold', fontSize: 20}}>DISCOVER DIGITAL EVENTS</Text>
        <Text style={{color: 'gray',fontSize: 15}}>
          Join a live online event - learn, interact and be entertained.
        </Text>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {colordata.map((item, index) => (
            <Image
              key={index}
              source={{ uri: item }}
              style={{ width: 80, height: 60, borderRadius: 10,marginLeft: 10, marginBottom: 20, marginTop: 10, marginRight: 20, paddingLeft: 20}}
            ></Image>
          ))} 
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    cardimg: {
      marginLeft: 20,
      marginTop: 10,
      fontSize: 15,
    },
});