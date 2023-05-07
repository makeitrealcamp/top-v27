import { View, Text, StyleSheet, FlatList } from 'react-native'

import Character from '../components/Cards/Character'

const favorites = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
]

const FavoritesScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen </Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Character {...item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})

export default FavoritesScreen
