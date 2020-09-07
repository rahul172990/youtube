import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("videoPlayer", {
          videoId: props.videoId,
          title: props.title,
        });
      }}
    >
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{ width: "100%", height: 200 }}
        />
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            alignItems: "center",
          }}
        >
          <View>
            <MaterialIcons
              name="account-circle"
              size={30}
              color="dimgray"
              style={{ marginHorizontal: 10 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                width: Dimensions.get("screen").width - 90,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                width: Dimensions.get("screen").width - 90,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.channelName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Card;
