import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GenderSelection = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNextStep = () => {
    // Implement the logic for the next step here
    navigation.navigate('LogScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select Gender</Text>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => handleGenderSelect('male')}>
          <View style={styles.genderContainer}>
            <Image
              source={require('../assets/Male2.png')}
              style={[styles.genderImage, selectedGender === 'male' && styles.selectedImage]}
            />
            <Text style={styles.genderText}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderSelect('female')}>
          <View style={styles.genderContainer}>
            <Image
              source={require('../assets/Female2.png')}
              style={[styles.genderImage, selectedGender === 'female' && styles.selectedImage]}
            />
            <Text style={styles.genderText}>Female</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.figureTextContainer}><Text style={styles.SelectFigureText}>Please use the Figure above to Select a Gender </Text></View>
      {selectedGender && (
        <View>
          <TouchableOpacity onPress={handleNextStep} style={styles.nextStepButton}>
          <Text>Next Step</Text>
        </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',           // #141414 for dark grey
  },
  headerContainer: {
    marginBottom: 220,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'firebrick',       // white if needed for grey
  },
  nextStepButton: {
    backgroundColor: 'firebrick',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', // Ensure the row takes up the full width
    marginBottom: 200,
  },
  genderContainer: {
    alignItems: 'center',
  },
  genderImage: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent', // Set border color to transparent initially
  },
  genderText: {
    marginTop: 15,
    textAlign: 'center',
    color:'firebrick',
    fontWeight: 'bold',
    fontSize: 20,
  },
  figureTextContainer: {
    marginTop: 16,
    marginBottom: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  SelectFigureText: {
    marginTop: 10,
    // marginBottom: 30,
    fontSize: 17,
    fontWeight: 'bold',
    color:'firebrick',
  },
  selectedImage: {
    borderColor: 'firebrick',
    borderRadius: 90,
  },
});

export default GenderSelection;