import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RewardsScreen = ({ navigation }) => {
  // Placeholder functions and data
  const toggleMenu = () => {};
  const renderMenu = () => {};
  const renderItem = ({ item }) => {};
  const data = []; // Your data array here

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/SecondCupPakistan?mibextid=LQQJ4d');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/secondcuppakistan/');
  };

  const handleYoutubePress = () => {
    Linking.openURL('https://www.youtube.com/SecondCup');
  };

  const handleGooglePress = () => {
    Linking.openURL('https://secondcup.pk');
  };

  const handleContactUsPress = () => {
    Linking.openURL('info@secondcup.pk'); 
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://secondcup.pk/contact-us/'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.logoContainer}>
          <Image source={require('../assets/2ndCupCircle.jpg')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Rewards Section</Text>
        <Text style={styles.paragraph}>
          Rewards Section will be added Soon!
        </Text>
      </View>
      {/* Support Center Section */}
      <View style={styles.supportCenterContainer}>
        <Text style={styles.heading}>Support Center</Text>
        <Text style={styles.paragraph}>
          For queries, please contact us at:
        </Text>
        <TouchableOpacity onPress={handlePrivacyPolicyPress}>
          <Text style={styles.link}>Privacy Policy | Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Render the Menu */}
      {renderMenu()}

      <View style={styles.footcontainer}>
      <Text style={styles.description}>
      COPYRIGHT: THE SECOND CUP COFFEE COMPANY 
      INC. 2022
      </Text>
      <Image
        source={require('../assets/footerimage.jpg')} 
        style={styles.footlogo}
      />
      <Text style={styles.description}>Follow us on:</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Icon name="instagram" size={30} color="#bc2a8d" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleYoutubePress}>
          <Icon name="youtube" size={30} color="#c4302b" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGooglePress}>
          <Icon name="google" size={30} color="#4285f4" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 35,
  },
  logo: {
    width: 200,
    height: 150,
  },
  textContainer: {
    marginBottom: 180,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: 'crimson',
    marginTop: 10,
    fontWeight: 'bold',
  },
  supportCenterContainer: {
    marginTop: 40,
    borderTopWidth: 1,
    paddingTop: 15,
    alignItems: 'center',
  },
                                // Footer Styles
  footcontainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  footlogo: {
    width: 250,
    height: 60,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default RewardsScreen;