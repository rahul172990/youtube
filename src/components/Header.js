import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
        <AntDesign
          name="youtube"
          size={30}
          color="red"
          style={{ marginLeft: 5 }}
        />
        <Text style={{ fontSize: 20, marginLeft: 5, fontWeight: "bold" }}>
          YouTube
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
        <Ionicons
          name="md-videocam"
          size={22}
          color="dimgray"
          style={{ marginHorizontal: 10 }}
        />
        <Ionicons
          name="md-search"
          size={22}
          color="dimgray"
          style={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate("search");
          }}
        />
        <MaterialIcons
          name="account-circle"
          size={24}
          color="dimgray"
          style={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "white",
    marginTop: Constant.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
});

export default Header;
