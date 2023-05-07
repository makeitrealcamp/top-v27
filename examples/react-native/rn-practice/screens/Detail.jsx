import { View, Text, StyleSheet, Button } from 'react-native'
import { useEffect, useState } from 'react';

import CharCard from '../components/Cards/Character';

const DetailScreen = ({ route, navigation }) => {
  const itemId = route?.params?.itemId;
  const [data, setData] = useState({})

  const getSingleCharacters = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
    const result = await res.json();

    setData(result)
  }

  useEffect(() => {
    if (itemId) {
      getSingleCharacters()
    }
  }, [itemId])

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen </Text>
      <CharCard {...data} page="Detail" />
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

export default DetailScreen
