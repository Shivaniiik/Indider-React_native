import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'

export default function Magazine() {
    const magazineData =[
        {
            id : 1,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678780283%2Fmivedfrpuksf5nmojnj9.png",
            text : "Tata Indian Premier League (IPL): Tickets, squads, schedule & more" 
        },
        {
            id : 2,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1662137209%2Fiotnxrqify1lutuosxc6.jpg",
            text : "Arijit Singh LIVE on the One Night Only Tour!" 
        },
        {
            id : 3,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1668424646%2Fqsu6tjeyt1a2seqgtjzv.jpg",
            text : "Something’s stirring up at India Cocktail Week!" 
        },
        {
            id : 4,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676620549%2Fndpqx8w4yf4ohlh9hxr2.jpg",
            text : "Something’s stirring up at India Cocktail Week!" 
        },
        {
            id : 5,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1536320609%2Fqqnggvhkywppb6lxoadq.jpg",
            text : "The Best Comedy Shows & Events In Your City" 
        },
        {
            id : 6,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1588942599%2Fjvekb96nwypnsn2yyiiy.jpg",
            text : "Learn something new anytime with online courses" 
        },
        {
            id : 7,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1665035340%2Fxvlle6knaoefblerlkca.jpg",
            text : "Zomaland is Back: Step into The Grandest Food And Entertainment Carnival!" 
        },
        {
            id : 8,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671270861%2Fk6s0uvwe3wkb8vdpqge5.png",
            text : "Mumbai Urban Art Festival's here to paint the town in its own artsy way!" 
        },
        {
            id : 9,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1626946392%2Fipznjvapqzibhwlv9esb.jpg",
            text : "Five Creative Ways To Make Your Next Company Event Awesome!" 
        },
        {
            id : 10,
            img :"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1536327685%2Folu7x7x70xizog7rpuna.jpg",
            text : "The Best Music Shows & Events In Your City" 
        },
    ]
  return (
    <>
    <View style={styles.head}>
    <Text style={{ fontWeight: "bold", fontSize: 20 }}>INSIDER MAGAZINE</Text>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft: 10}}>
        {magazineData.map((item) => (
          <View key={item.id} style={styles.magazine}>
            <Image
              source={{ uri: item.img }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 2,
                //objectFit: "cover",
              }}
            />
            <View style={{position: 'absolute', bottom: 8 , padding: 4, paddingLeft: 8 }}>
            <Text style={{  fontWeight: 500, color: 'white' }}>
              {item.text}
            </Text>
            </View>
            
          </View>
        ))}
      </ScrollView>
      
    </>
  )
}
const styles = StyleSheet.create({
    head: {
      flexWrap: "wrap",
      flexDirection: "row",
      marginLeft: 20,
      marginTop: 30,
    },
    magazine: {
      flexWrap: "wrap",
      marginLeft: 10,
      marginTop: 10,
      fontSize: 15,
      //height: 200,
      //width: 220,
      position: 'relative',
    },
  });
  
