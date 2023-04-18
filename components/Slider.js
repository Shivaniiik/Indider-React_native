import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Slider() {
  const images = [
    require("../assets/img1.png"),
    require("../assets/img2.png"),
    require("../assets/img3.png"),
    require("../assets/img4.png"),
    require("../assets/img5.png"),
    require("../assets/img6.png"),
  ];
  return (
    <>
      <View style={styles.slider}>
        <SliderBox
          images={images} style={{width:360,height:170 , marginBottom:20}}
          dotColor="red"
          inactiveDotColor="gray"
          dotStyle={{ height: 5, width: 5, borderRadius: 40}}
          autoplay= {true}
          autoplayInterval= {3000}
          circleLoop={true}
          paginationBoxVerticalPadding={-30}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  slider: {
    //flex: 9,
    paddingBottom : 20,
  },
});
