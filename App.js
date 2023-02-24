import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Main from "./components/MainPage";
import SongView from "./components/SongView";
import SongPreview from "./components/SongPreview";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SongView" component={SongView} />
        <Stack.Screen name="SongPreview" component={SongPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
