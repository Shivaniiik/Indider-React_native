import { View, StyleSheet, Image, Text } from "react-native";
export default function Navbar() {
  return (
    <>
      <View style={styles.navbar}>
        <Image
          style={{ width: 150, height: 70 }}
          source={require("../assets/logo.png")}
        />
        <Image
          style={{ width: 30, height: 30, marginLeft: 160, marginTop: 25 }}
          source={require("../assets/notification.png")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  navbar: {
    //flex: 1,
    flexDirection: "row",
    //marginLeft: 10,
    marginTop: 25,
    marginBottom: 0,
    backgroundColor: "white",
    
  },
});
