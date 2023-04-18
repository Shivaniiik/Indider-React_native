import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Detail() {
  return (
    <View style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          About the Event
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: "gray" }}>
          Grammy & Oscar winner A R Rahman to perform his full-fledged Live
          Concert for Feeding Smiles in Pune!
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: "gray" }}>
          AR Rahman is a name that needs no introduction to Indian music fans.
          To call him just a musician or composer would do his impact and legacy
          no justice. Experience the Maestro’s Live Concert for Feeding Smiles
          in Pune on 30th April 2023.
        </Text>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 10 }}>
        Official Offline Ticketing Partner
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 10 }}>
        LiveFiesta
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 10 }}>
        Mob: 9821261553 , 9833070733 , 9619272555
      </Text>
      <Text style={{ fontSize: 15, paddingTop: 10 }}>
        Throughout his illustrious career, Rahman has composed music for some of
        the biggest names in the Hollywood, Bollywood and Tamil film industry,
        and with some of the best singers and musicians. He has several
        international collaborations as well - including English, Chinese and
        Iranian films. He has worked with Ranjit Barot, Shivamani, Clinton
        Cerejo, and international stars like Michael Jackson, Mick Jagger, Kylie
        Minogue and Zayn Malik.
      </Text>
      <Text style={{ fontSize: 15, paddingTop: 10 }}>
        Concert for Feeding Smiles is promoted & produced by 2BHK Alfresco,
        Pune.
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 20 }}>
        FREQUENTLY ASKED QUESTIONS:
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 10 }}>
        Is this a standing or a seated show?
      </Text>
      <Text>
        Both. The concert has multiple categories of ticket options which grant
        you entry to either a standing zone or a seated zone.
      </Text>

      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 20 }}>
        Is there an age limit to attending the concert?{" "}
      </Text>

      <Text>
        We wouldn’t want anyone missing out on this amazing experience. A few
        things to keep in mind though, children up to the age of 3 years can
        enter for free but no seating may be provided for them. Children above
        that age will require a ticket. Due to the live band performance event,
        all parents/guardians are requested to bring their kids at their own
        discretion. If you are under the age of 16, you will need to be
        accompanied by an adult guardian.
      </Text>

      <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 20 }}>
        Will there be a parking facility at the venue?
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 10 }}>
        For Solitaire, Platinum and Premium Lounges
      </Text>
      <View>
        <Text style={{ fontSize: 15 }}>
          Free Valet Parking available at the venue.
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>For Gold and Silver</Text>
        <Text>- AISSMS college ground.</Text>
        <Text>For Bikes - Central Railway parking (Besides venue).</Text>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 20 }}>
        Will photography or videography be allowed?
      </Text>
      <Text>
        No professional photography/videography will be allowed at the concert
      </Text>

      <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 30 }}>Listen to AR Rahman Songs</Text>
      <Image source={{ uri: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677325824%2Fwsvnekmmtjeijbutoaoa.png"}}
       style={{height : 140,width: 320, borderRadius : 10, marginTop: 30}} />

      <Text
        style={{
          marginTop: 10,
          marginBottom: 30,
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 20,
        }}
      >
        Venue
      </Text>

      <Text style={{ fontSize: 15, paddingTop: 10 }}>The Mills</Text>
      <Text style={{ fontSize: 15 }}>
        5, Raja Bahadur Mill Rd, Behind Hotel Grand Sheraton, Sangamvadi, Pune,
        Maharashtra 411001, India
      </Text>
     
    </View>
  );
}
