import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import MiniCard from "../components/MiniCard";
import { useSelector, useDispatch } from "react-redux";

const Search = ({ navigation }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  // const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const miniCardData = useSelector((state) => {
    return state;
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&key=AIzaSyA0hkPoX3sXLg_SR803tppx6ARD1n3gMbY`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCardData(data.items);
      });
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <TextInput
          style={{
            height: 40,
            width: 250,
            backgroundColor: "gainsboro",
          }}
          placeholder="Search"
          placeholderTextColor="slategray"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <TouchableOpacity onPress={fetchData}>
          <Ionicons name="md-send" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{ marginTop: 50 }}
        />
      ) : (
        <FlatList
          data={miniCardData}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channelName={item.snippet.channelTitle}
              />
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    marginTop: Constant.statusBarHeight,
    paddingBottom: 120,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 12,
  },
});

export default Search;
