import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Header from "../components/Header";

const LittleCard = ({ name, color }) => {
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
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${name}&type=video&key=AIzaSyA0hkPoX3sXLg_SR803tppx6ARD1n3gMbY`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCardData(data.items);
      });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setValue(name);
        fetchData();
      }}
    >
      <View style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.container}>
                <LittleCard name="Trending" color="crimson" />
                <LittleCard name="Music" color="seagreen" />
                <LittleCard name="Gaming" color="salmon" />
                <LittleCard name="News" color="royalblue" />
                <LittleCard name="Films" color="deepskyblue" />
                <LittleCard name="Fashion and Beauty" color="slateblue" />
                <LittleCard name="Learning" color="mediumturquoise" />
                <LittleCard name="Live" color="tomato" />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 9,
                    marginVertical: 15,
                  }}
                >
                  Trending Videos
                </Text>
              </View>
            </>
          }
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
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: 165,
    borderRadius: 5,
    backgroundColor: "red",
    marginTop: 10,
  },
  container: {
    height: 210,
    backgroundColor: "#e6e6e6",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  txt: {
    color: "white",
    textAlign: "center",
    alignContent: "center",
    marginVertical: 10,
  },
});

export default Explore;
