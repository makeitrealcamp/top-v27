import { useContext } from "react";
import FavoritesContext from "../context";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CharCard from "../components/Cards/Character";

const Favorites = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const { removeFavorite } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      {favorites && favorites.length ? (
        <>
          <Text style={styles.text}>Your Favorites</Text>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.element}>
                <CharCard name={item.name} image={item.image} />
                <Button
                  title="Remove this Character"
                  onPress={() => removeFavorite(item.id)}
                />
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.text}>No favorites yet</Text>
      )}
    </View>
  );
};

export default Favorites;

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
  element : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  }
});
