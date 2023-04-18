import React from 'react';
import { View, Text, StyleSheet, } from 'react-native/';

export default function ARrahman() {
  return (
    <>
    <View style={styles.card}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AR Rahman Concert for Feeding Smiles | Pune </Text>
      <Text style={{paddingTop: 10}}>Music Concerts</Text>
      <Text style={{paddingTop: 10}}>April 30 | Gates Open at 6PM</Text>
      <Text style={{paddingTop: 10}}>₹999 onwards</Text>
      <View style={{ backgroundColor: "#F5FCFE", padding: 10 }}>
        <Text style={{ color: "#31C0F0", margin: 0 }}>
          Step out and enjoy this event
        </Text>
      </View>
    </View>
    <View style={styles.card}
  >
    <Text  style={{fontWeight: 'bold', fontSize: 20}}>Event Guide</Text>
    <Text style={{paddingTop: 10,marginLeft: 30}}>
      For Age(s) 
      </Text >
      <Text style={{marginLeft: 30}}>Family Friendly</Text>
    
    <Text style={{paddingTop: 30, marginLeft: 30}}>Language</Text>
    <Text style={{marginLeft: 30}}>Hindi</Text>
  </View>
            <Text style={{ fontWeight: "bold",marginTop: 20, marginLeft: 20, fontSize: 20 }}>Invite your friends</Text>
            <Text style={{  marginLeft: 20 }}>and enjoy a shared experience</Text>
  </>
    
  )
}
const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 0,
    width: 310,
    borderWidth : 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#e3e5e7',
    
  },
});


