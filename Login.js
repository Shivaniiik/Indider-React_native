import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "161175158296-rqjs16q2td3k7pe3sbihf8n3sq0fbbdn.apps.googleusercontent.com",
    //expoClientId: "161175158296-5fvj4sv0nnvb8qgjv2j308ehve4it9kt.apps.googleusercontent.com"
    //webClientId: "161175158296-5fvj4sv0nnvb8qgjv2j308ehve4it9kt.apps.googleusercontent.com",
    //iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  return (
    <>
      <View style={styles.container}>
        {userInfo === null ? (
          <Button
            title="Sign in with Google"
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
          />
        ) : (
          <Text style={styles.text}>{userInfo.name}</Text>
        )}
      </View>
      <View style={styles.btn}>
        <Button
          title="Insider"
          onPress={() => navigation.navigate("Insider")}
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
