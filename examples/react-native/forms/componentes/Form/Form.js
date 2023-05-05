import { useState } from 'react'
import { Text, View, TextInput, Switch, Button, KeyboardAvoidingView, Platform } from 'react-native'
import styles from './Form.styles'

const Form = () => {
  const [ showPassword, setShowPassword ] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (input, value) => {
    setData({
      ...data,
      [input]: value
    })
  }

  const handleSubmit = () => {
    console.log('ESTO ES LO QUE ENVIAMOS', data);
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.formTitle}>Registro</Text>
      <TextInput 
        style={styles.formInput}
        placeholder='Email'
        autoCapitalize='none'
        value={data.email}
        keyboardType='email-address'
        onChangeText={text => handleChange('email', text)}
      />
      <TextInput 
        style={styles.formInput}
        placeholder='Contraseña'
        autoCapitalize='none'
        value={data.password}
        onChangeText={text => handleChange('password', text)}
        secureTextEntry={!showPassword}
      />
      <TextInput 
        placeholder='text'
      />
      <Switch
        value={showPassword}
        onValueChange={() => setShowPassword(!showPassword)}
      />
      <Button
        style={styles.formButton}
        title='Registro'
        onPress={handleSubmit}
      />
    </KeyboardAvoidingView>
  )
}

export default Form