import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Gridcard() {
  const figureData = [
    {
      id: 1,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Workshops",
      events: "190 events",
    },
    {
      id: 2,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728411%2Fm2atnkiwoz0fidmsbso0.png",
      title: "Comedy",
      events: "62 events",
    },
    { 
      id: 3,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728594%2Ffmp33llb6xv1fwgf6uws.png",
      title: "Courses",
      events: "48 events",
    },
    {
      id : 4,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634730202%2Fh1xu8qybujyyyo0e7pb8.png",
      title: "Music",
      events: "40 events",
    },
    {
      id : 5,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729369%2Fowpjhi6cboyqkajbtsdy.png",
      title: " Arts",
      events: "38 events",
    },
    { 
      id : 6,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729369%2Fowpjhi6cboyqkajbtsdy.png",
      title: "Theatre",
      events: "29 events",
    },
    {
      id : 7,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728929%2Flydoux72oktn1z3cnje6.png",
      title: "Health",
      events: "26 events",
    },
    {
      id : 8,
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634727837%2Fgzh9ycfs8lmk2rzng7ep.png",
      title: "Camping",
      events: "18 events",
    },
  ];
  return (
    <>
      <View style={styles.card}>
        <Text style={{ fontWeight: "bold", fontSize: 20}}>BROWSE EVENTS BY GENRE</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            borderColor: "black",
            borderRadius: 10,
            marginLeft: 10,
            
          }}
        >
          {figureData.map((item) => (
            <View key={item.id} style={styles.subcard}>
              <Image
                source={{ uri: item.imgurl }}
                style={{
                  width: 50,
                  height: 30,
                  borderRadius: 10,
                  marginBottom: 10,
                  marginRight: 15,
                  marginTop: 10,
                  borderColor: "#d3d3d3",
                  borderWidth: 1,
                  padding: 30,
                }}
              ></Image>
              <View>
                <Text style={{fontWeight: 'bold'}}>{ item.title }</Text>
                <Text style={{fontSize: 10}}>{ item.events }</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    flexWrap: "wrap",
    marginLeft: 20,
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center'
  },
  subcard :{
    textAlign :'auto'
  }
});
