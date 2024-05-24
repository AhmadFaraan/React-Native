import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect for resetting inputs

function SignUpScreen({ navigation }) {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [isDisagreeChecked, setIsDisagreeChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFormFields = () => {
    setIsAgreeChecked(false);
    setIsDisagreeChecked(false);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
  };

  const handleAgreePress = () => {
    setIsAgreeChecked(true);
    setIsDisagreeChecked(false);
  };

  const handleDisagreePress = () => {
    setIsAgreeChecked(false);
    setIsDisagreeChecked(true);
  };

  const SignUpButtonPress = () => {
    // Will apply submit logic later to submit the form.
    console.log('Submitting the form');
  };

  const LoginButtonPress = () => {
    // Handling Login Navigation logic here...
    navigation.navigate('LogIn');
  };

  // Using useFocusEffect to reset SignUp screen.
  useFocusEffect(
    React.useCallback(() => {
      resetFormFields();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>SignUp Form</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="Enter your first name" />
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Enter your last name" />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Terms and Conditions Agreement</Text>
        <View style={styles.horizontalContainer}>
          <CheckBox
            title="Agree"
            checked={isAgreeChecked}
            onPress={handleAgreePress}
            checkedColor="#5cb85c"
            uncheckedColor="#777"
            containerStyle={styles.checkboxStyle}
          />
          <CheckBox
            title="Disagree"
            checked={isDisagreeChecked}
            onPress={handleDisagreePress}
            checkedColor="#d9534f"
            uncheckedColor="#777"
            containerStyle={styles.checkboxStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'crimson' }]}
            onPress={SignUpButtonPress}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginTextContainer}>
          <Text>Already a member? </Text>
          <TouchableOpacity onPress={LoginButtonPress}>
            <Text style={[styles.loginLink, { fontWeight: 'bold' }]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    borderWidth: 2,
    borderColor: '#dc143c',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#dc143c',
  },
  label: {
    marginTop: 10,
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
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
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  checkboxStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#dc143c',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SignUpScreen;
