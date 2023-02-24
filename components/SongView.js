import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const SongView = ({ route, navigation }) => {
  const { viewURI } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: viewURI }} />
    </SafeAreaView>
  );
};

export default SongView;
