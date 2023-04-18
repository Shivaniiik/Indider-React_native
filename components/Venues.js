import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Venues() {
  const venuesData = [
    {
      id: 1,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1655117264%2Fgplz6sta539ffswkk29o.png",
      title: "antiSOCIAL, Mumbai",
      events: "9 events",
    },
    {
      id: 2,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1658738521%2Fszm0atgzhartvcinkv8f.png",
      title: "The Entert ainment Fa...",
      events: "9 events",
    },
    {
      id: 3,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1579592568%2Fi3htmoqtz1x6hlny4y8e.jpg",
      title: "G5A warehouse",
      events: "6 events",
    }
  ];
  return (
    <>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>VENUES</Text>

        <Text
          style={{
            borderRadius: 10,
            borderColor: "#d3d3d3",
            borderRadius: 5,
            borderWidth: 1,
            paddingTop: 2,
            paddingBottom: 2,
            padding: 8,
            fontSize: 12,
            marginLeft: 200
          }}
        >
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {venuesData.map((item) => (
          <View key={item.id} style={styles.venue}>
            <Image
              source={{ uri: item.imgurl }}
              style={{
                height: 90,
                width: 90,
                borderRadius: 45,
                objectFit: "cover",
              }}
            />
            <View style={{}}>
            <Text style={{ textAlign: "center", fontWeight: 600 }}>
              {item.title}
            </Text>
            <Text style={{ textAlign: "center",fontSize: 12 }}>{item.events}</Text>
            </View> 
          </View>
        ))}
        </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  venue: {
    //flexWrap: "wrap",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    height: 160,
    width: 90,
  },
});
