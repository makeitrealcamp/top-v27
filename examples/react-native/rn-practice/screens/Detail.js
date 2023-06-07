import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { useContext } from "react";
import FavoritesContext from "../context";

const DetailScreen = ({ route, navigation }) => {
  const { name, image, id } = route.params;
  const item = { name, image, id };

  const { addFavorite } = useContext(FavoritesContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <ImageBackground source={{ uri: image }} style={styles.bgImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </ImageBackground>
      <Button title="add to favorites" onPress={() => addFavorite(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  bgImage: {
    height: 150,
    width: 150,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});

export default DetailScreen;
