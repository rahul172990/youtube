import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Constant from "expo-constants";
import { WebView } from "react-native-webview";

const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight + 10 }}>
      <View
        style={{
          height: 280,
          width: "100%",
        }}
      >
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
        <Text
          style={{ fontSize: 16, width: "85%", margin: 10 }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default VideoPlayer;
