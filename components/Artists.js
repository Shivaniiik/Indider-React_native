import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Artists() {
  const artistsData = [
    {
      id: 1,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674139055%2Fcmdmy3gvs0vwm7bspew7.jpg",
      title: "Ashish Bagrecha",
      events: "1 event",
    },
    {
      id: 2,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1639638337%2Fzh9ij0xtw1itzqg83bqc.png",
      title: "Peter Cat...",
      events: "1 event",
    },
    {
      id: 3,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Feventimages.insider.in%2Fimage%2Fmain%2FAUwGCiDTVGqH2Yq7kkfu_Kunal_Rao.jpg",
      title: "Kunal Rao",
    },
    {
      id: 4,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1645107988%2Ffg7273yiajnzcrurz0u3.jpg",
      title: "Anish Baheti",
    },
    {
      id: 5,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678538328%2Fv9yw0rykb7byc6u4mvwq.jpg",
      title: "Pradeep Kumar",
    },
  ];
  return (
    <>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>ARTISTS</Text>

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
            marginLeft: 200,
          }}
        >
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {artistsData.map((item) => (
          <View key={item.id} style={styles.artist}>
            <Image
              source={{ uri: item.imgurl }}
              style={{
                height: 90,
                width: 90,
                borderRadius: 45,
                objectFit: "cover",
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: 600 }}>
              {item.title}
            </Text>
            <Text style={{ textAlign: "center" }}>{item.events}</Text>
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
    marginTop: 30,
  },
  artist: {
    flexWrap: "wrap",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },
});
