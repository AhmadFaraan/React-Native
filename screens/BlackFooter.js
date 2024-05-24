import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/SecondCupPakistan');
  };
  
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/secondcuppakistan/');
  };
  
  const handleYoutubePress = () => {
    Linking.openURL('https://youtu.be/pbQe9vo60xI?si=AePYqoLFOLhSHgjB');
  };
  
  const handleGooglePress = () => {
    Linking.openURL('https://secondcup.pk');
  };
  
  const handleContactUsPress = () => {
    Linking.openURL('mailto:info@secondcup.pk'); 
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://www.your-privacy-policy-url.com'); 
  };

  return (
    <View style={styles.footcontainer}>
      <Image
        source={require('./assets/footerimage.jpg')} 
        style={styles.footlogo}
      />
      <Text style={styles.description}>
      COPYRIGHT: THE SECOND CUP COFFEE COMPANY 
      INC. 2022
      </Text>
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
      <TouchableOpacity onPress={handleContactUsPress}>
        <Text style={styles.linkText}>Contact Us | Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footcontainer: {
    backgroundColor: 'black', 
    padding: 20,
    alignItems: 'center',
    marginTop: 100,
  },
  footlogo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginHorizontal: 20,
  },
  downloadText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  linkText: {
    fontSize: 16,
    color: 'crimson',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default App;