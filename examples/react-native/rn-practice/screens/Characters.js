import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import Character from "../components/Cards/Character";
import axios from "axios";

const Characters = ({ navigation }) => {
  const [characters, setCharacters] = useState({});
  console.log("🚀 ~ file: Characters.js:15 ~ Characters ~ characters:", characters)

  useEffect(() => {
    const charsFetch = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(response.data.results)
    };
    charsFetch();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters</Text>
      <FlatList data={characters} renderItem={(char)=><Character name={char.name} keyExtractor={char.id}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Characters;
