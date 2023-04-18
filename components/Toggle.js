import React, {useState} from 'react'
import { Button , View, Text, TouchableOpacity} from 'react-native'
export default function Toggle() {
    const [show, setShow]=useState(true)
  return (
    <View style={{marginLeft: 20, marginTop: 30}}>
         <TouchableOpacity  onPress={()=> setShow(!show)}>
            <Text>
            <Text style={{color : 'red', fontWeight: '900', fontSize: 20}}>+</Text>
     <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 30, }}>  Terms & Conditions </Text>
            </Text>
           
     {
        show  ? null :  <User/>
     }
     </ TouchableOpacity>
    </View>
    
    
  )
} 
const User=()=>{
    return(
        <>
        <View style={{ lineHeight: 13 }}>
            <Text>Please carry a valid ID proof along with you.</Text>
            <Text>
              No refunds on purchased ticket are possible, even in case of any
              rescheduling.
            </Text>
            
            <Text>
              Security procedures, including frisking remain the right of the
              management.
            </Text>
           
            <Text style={{ lineHeight: 25 }}>
              No dangerous or potentially hazardous objects including but not
              limited to weapons, knives, guns, fireworks, helmets, lazer
              devices, bottles, musical instruments will be allowed in the venue
              and may be ejected with or without the owner from the venue.
            </Text>
          
            <Text style={{ lineHeight: 25 }}>
              The sponsors/performers/organizers are not responsible for any
              injury or damage occurring due to the event.
            </Text>
            
            <Text>
              Any claims regarding the same would be settled in courts in
              Mumbai.
            </Text>

            <Text>People in an inebriated state may not be allowed entry.</Text>
           
            <Text>
              Organizers hold the right to deny late entry to the event. Venue
              rules apply.
            </Text>
          </View>
          </>
    )
}
