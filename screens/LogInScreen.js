import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function LogInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Resetting the form...
    resetFormFields();
  }, []);

  // Use useFocusEffect to reset form fields on screen focus
  useFocusEffect(
    React.useCallback(() => {
      resetFormFields();
    }, [])
  );

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogInPress = () => {
    // Applying login logic here in the future...
    console.log('Logging in...');
  };

  const handleSignUpButtonPress = () => {
    // Handling sign-up navigation logic here.
    navigation.navigate('SignUp');
  };

  const handleGuestLogInPress = () => {
    // Handling guest log in navigation logic here.
    navigation.navigate('MainScreen'); // Navigate to 'MainScreen'
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Log In</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'crimson' }]}
            onPress={handleLogInPress}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleGuestLogInPress}>
          <Text style={[styles.signupLink, { fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 18, }]}>
            Guest Log In
          </Text>
        </TouchableOpacity>
        <View style={styles.signupTextContainer}>
          <Text>Not a member? </Text>
          <TouchableOpacity onPress={handleSignUpButtonPress}>
            <Text style={[styles.signupLink, { fontWeight: 'bold', fontSize: 17, }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#dc143c',
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    borderColor: '#dc143c',
    borderWidth: 2,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'crimson',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 20,
  },
  signupTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupLink: {
    color: '#dc143c',
    textDecorationLine: 'none',
  },
});

export default LogInScreen;
