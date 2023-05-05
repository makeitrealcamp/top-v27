import { View, Text, StyleSheet, ImageBackground, Button, TouchableOpacity } from 'react-native';

const CharCard = ({ name, image, id, navigate, page }) => {
// console.log("🚀 ~ file: Character.js:4 ~ CharCard ~ page:", page)
// console.log("🚀 ~ file: Character.js:4 ~ CharCard ~ navigate:", navigate)
// console.log("🚀 ~ file: Character.js:4 ~ CharCard ~ id:", id)
// console.log("🚀 ~ file: Character.js:4 ~ CharCard ~ image:", image)
console.log("🚀 ~ file: Character.js:4 ~ CharCard ~ name:", name)


  return (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <ImageBackground source={{ uri: image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{name}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 170,
    width: 170,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginRight: 10,
  },
  bgImage: {
    height: 150,
    width: 150,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
});

export default CharCard;
