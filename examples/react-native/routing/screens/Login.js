import {View, Text, StyleSheet, Button } from 'react-native'

const LoginScreen = ({navigation}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title='Ir a Registro'
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title='Ir a Landing'
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  )
}

export default LoginScreen

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