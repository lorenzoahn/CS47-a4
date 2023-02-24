import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const SongPreview = ({ route, navigation }) => {
  const { previewURI } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: previewURI }} />
    </SafeAreaView>
  );
};

export default SongPreview;
