import {View, Text, StyleSheet } from 'react-native'

const RegisterScreen = ({ navigation }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
    </View>
  )
}

export default RegisterScreen

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