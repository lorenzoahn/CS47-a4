import { Pressable, Text, StyleSheet, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { Images } from "../assets/Themes";

const SpotifyAuthButton = ({ authenticationFunction }) => {
  return (
    <Pressable style={styles.pressable} onPress={authenticationFunction}>
      <Image style={styles.logo} source={Images.spotify}></Image>
      <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 9999999,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  authText: {
    color: Themes.colors.white,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
});

export default SpotifyAuthButton;
