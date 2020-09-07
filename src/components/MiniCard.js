import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

const MiniCard = (props) => {
  return (
    <View style={{ flexDirection: "row", margin: 15, marginBottom: 0 }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{ width: "45%", height: 100 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{ fontSize: 16, width: "22%" }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          {props.title}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          {props.channelTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MiniCard;
