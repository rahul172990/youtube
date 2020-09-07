import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ paddingBottom: 78 }}>
      <Header />
      <FlatList
        keyExtractor={(item) => item.id.videoId}
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
