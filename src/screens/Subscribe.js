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
import Header from "../components/Header";

const Subscribe = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text>Subscribe</Text>
    </View>
  );
};

export default Subscribe;
