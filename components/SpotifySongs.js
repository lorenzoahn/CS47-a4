import {
  View,
  Pressable,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { Images } from "../assets/Themes";
import { Ionicons } from "@expo/vector-icons";

const RenderItem = (content, index, navigation) => {
  return (
    <Pressable
      style={styles.trackView}
      onPress={(e) => {
        // e.stopPropagation();
        navigation.navigate("SongView", {
          viewURI: content.externalUrl,
        });
      }}
    >
      <View style={styles.indexView}>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("SongPreview", {
              previewURI: content.previewUrl,
            });
          }}
        >
          <Ionicons
            name="play-circle-outline"
            color="green"
            size={30}
          ></Ionicons>
        </Pressable>
      </View>
      <Image style={styles.songImage} source={{ uri: content.imageUrl }} />
      <View style={styles.songView}>
        <Text style={styles.whiteSongText} numberOfLines={1}>
          {content.songTitle}
        </Text>
        <Text style={styles.greySongText} numberOfLines={1}>
          {content.songArtists.map((item) => item.name).join(", ")}
        </Text>
      </View>
      <View style={styles.songView}>
        <Text style={styles.whiteSongText} numberOfLines={1}>
          {content.albumName}
        </Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.whiteSongText}>
          {millisToMinutesAndSeconds(content.duration)}
        </Text>
      </View>
    </Pressable>
  );
};

const SpotifySongs = ({ tracks, navigation }) => {
  console.log(tracks);
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Image style={styles.logo} source={Images.spotify} />
        <Text style={styles.header}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item, index }) => RenderItem(item, index, navigation)}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: Themes.colors.white,
    fontWeight: "bold",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  headerView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
  trackView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 2,
    marginLeft: 5,
  },
  indexView: {
    justifyContent: "flex-start",
    width: 40,
  },
  songView: {
    justifyContent: "flex-start",
    width: "30%",
    marginLeft: 15,
  },
  timeView: {
    justifyContent: "flex-start",
    width: 50,
  },
  songImage: {
    width: 70,
    height: 70,
    margin: 5,
  },
  whiteSongText: {
    color: Themes.colors.white,
  },
  greySongText: {
    color: Themes.colors.gray,
    ellipsizeMode: "tail",
    numberOfLines: 1,
  },
});

export default SpotifySongs;
