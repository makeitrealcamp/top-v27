import { useState } from 'react';
import {View, Text, StyleSheet, Button, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const ImagePickerScreen = () => {
  const [image, setImage] = useState(null)

  const pickImageHandler = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if(!result.canceled){
      setImage(result.assets[0].uri)
    }
  }

  const shareImageHandler = async () => {
    const isAvailable = await Sharing.isAvailableAsync()

    if(!isAvailable) {
      Alert.alert('Ups! tu dispositivo no es compatible con esta funcinalidad')
    }

    await Sharing.shareAsync(image)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Image galery</Text>
      <Button
        title='Galeria'
        onPress={pickImageHandler}
      />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      {image && (
        <Button
          title='compartir imagen'
          onPress={shareImageHandler}
        />
      )}
    </View>
  )
}

export default ImagePickerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
})