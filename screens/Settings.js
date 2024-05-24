import React, { useState } from 'react';
import { View, Text, Switch, Button, Modal, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const Settings = ({ navigation }) => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);

  const handleToggleNotification = () => {
    setNotificationEnabled((prev) => !prev);
    // You can add logic to update notification settings in the backend or local storage
  };

  const handleChangePassword = () => {
    // Add logic to navigate to the Change Password screen
    navigation.navigate('ChangePassword');
  };

  const handleLogout = () => {
// let's navigate to the login screen
    navigation.navigate('LogScreen');
  };

  const handleResetSettings = () => {
    // Add logic to reset all settings to their default values
    setNotificationEnabled(false);
    setDarkModeEnabled(false);
    // Reset other settings as needed
  };

  const handleHelp = () => {
    setHelpModalVisible(true);
    // You can add additional logic for handling help, such as navigating to a help screen
  };

  const handleCloseHelpModal = () => {
    setHelpModalVisible(false);
  };

  const handleFeedback = () => {
    setFeedbackModalVisible(true);
    // You can add logic for handling feedback, such as sending it to your backend
  };

  const handleCloseFeedbackModal = () => {
    setFeedbackModalVisible(false);
  };

  const handleToggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
    // You can add logic to apply dark mode throughout your app
  };

  const handleViewTerms = () => {
    setTermsModalVisible(true);
    // You can add logic to fetch and display terms and conditions
  };

  const handleCloseTermsModal = () => {
    setTermsModalVisible(false);
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://secondcup.pk/contact-us/'); 
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.logoContainer}>
          <Image source={require('../assets/2ndCupCircle.jpg')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
      <Text style={styles.heading}>Account Settings</Text>
      <Button title="Change Password" onPress={handleChangePassword} style={styles.button} />
      <Button title="Reset Settings" onPress={handleResetSettings} style={styles.button} />
      <Button title="Logout" onPress={handleLogout} style={styles.button} />

      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={handleToggleNotification}
        />
      </View>

      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleToggleDarkMode}
        />
      </View>

      <TouchableOpacity onPress={handleHelp}>
        <Text style={styles.helpText}>How Can We Help You?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleViewTerms}>
        <Text style={styles.termsText}>View Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePrivacyPolicyPress}>
      <Text style={styles.feedbackText}>Provide Feedback</Text>
      </TouchableOpacity>
      {/* Help Modal */}
      <Modal
        visible={helpModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseHelpModal}
      >
        <ScrollView style={styles.helpModalContainer}>
          <Text style={styles.helpFontHeading}>General Assistance:</Text>
          <Text style={styles.helpTextParagraph}>Welcome to Second Cup! We're here to assist you in making your experience exceptional. Whether you have questions about our menu, need help with the app, or want to share your feedback, our team is ready to provide support. Click the button below and let us know how we can help you today.</Text>
          <Text style={styles.helpFontHeading}>Menu Recommendations:</Text>
          <Text style={styles.helpTextParagraph}>Not sure what to order? Our team is here to guide you through our diverse menu options. Whether you're in the mood for a rich espresso, a refreshing iced beverage, or a delicious pastry, we can offer personalized recommendations based on your preferences. Click the button and discover your next favorite Second Cup treat!</Text>
          <Text style={styles.helpFontHeading}>Technical Support:</Text>
          <Text style={styles.helpTextParagraph}>Experiencing technical issues with the app? We understand the importance of a smooth user experience. Click the "How can we help you" button to report any glitches, share your insights, or seek technical assistance. Our support team is dedicated to resolving any concerns promptly to ensure you enjoy a seamless experience with Second Cup.</Text>
          <Text style={styles.helpFontHeading}>Feedback and Suggestions:</Text>
          <Text style={styles.helpTextParagraph}>Your feedback is invaluable to us. Whether you have a suggestion for improving our services or want to share your positive experience, we're all ears. Click the button below to provide feedback, share your thoughts, and contribute to making Second Cup an even better place for everyone.</Text>
          <Text style={styles.helpFontHeading}>Event Planning:</Text>
          <Text style={styles.helpTextParagraph}>Planning a special event or gathering at Second Cup? Let us assist you in creating a memorable experience. Click the button to connect with our event planning team. From catering options to venue arrangements, we're here to ensure your event at Second Cup is nothing short of perfect.</Text>
          <Button title="Close" onPress={handleCloseHelpModal} style={styles.button} />
        </ScrollView>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        visible={feedbackModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseFeedbackModal}
      >
        <View style={styles.feedbackModalContainer}>
          <Text style={styles.feedbackModalText}>Feedback Modal Content</Text>
          <Button title="Close" onPress={handleCloseFeedbackModal} style={styles.button} />
        </View>
      </Modal>

      {/* Terms Modal */}
      <Modal
        visible={termsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseTermsModal}
      >
        <ScrollView style={styles.helpModalContainer}>
          <Text style={styles.helpFontHeading}>Terms and Conditions</Text>
          <Text style={styles.helpTextParagraph}>Welcome to the Second Cup Restaurant App! These Terms and Conditions outline the rules and regulations for the use of our mobile application.</Text>
          <Text style={styles.helpTextParagraph}>By accessing this app, we assume you accept these terms and conditions. Do not continue to use the Second Cup Restaurant App if you do not agree to all of the terms and conditions stated on this page.</Text>
          <Text style={styles.helpFontHeading}>1. License to Use</Text>
          <Text style={styles.helpTextParagraph}>1.1. Second Cup grants you a limited, non-exclusive, and non-transferable license to access and use the features of the Second Cup Restaurant App solely for personal and non-commercial purposes.</Text>
          <Text style={styles.helpTextParagraph}>1.2. You must be at least 18 years old to use this app. By using the Second Cup Restaurant App, you warrant that you are at least 18 years of age.</Text>
          <Text style={styles.helpFontHeading}>2. User Accounts</Text>
          <Text style={styles.helpTextParagraph}>2.1. In order to access certain features of the Second Cup Restaurant App, you may be required to create a user account. You agree to provide accurate and complete information when creating your account.</Text>
          <Text style={styles.helpTextParagraph}>2.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</Text>
          <Text style={styles.helpFontHeading}>3. Content</Text>
          <Text style={styles.helpTextParagraph}>3.1. You acknowledge that all content provided through the Second Cup Restaurant App, including text, graphics, logos, images, audio clips, and software, is the property of Second Cup or its licensors and is protected by copyright laws.</Text>
          <Text style={styles.helpTextParagraph}>3.2. You may not use, reproduce, distribute, or display any content from the Second Cup Restaurant App without prior written permission from Second Cup.</Text>
          <Text style={styles.helpFontHeading}>4. Privacy Policy</Text>
          <Text style={styles.helpTextParagraph}>4.1. Your use of the Second Cup Restaurant App is also governed by our Privacy Policy, which outlines how we collect, use, and disclose your personal information. By using the app, you consent to the terms of our Privacy Policy.</Text>
          <Text style={styles.helpFontHeading}>5. Use Restrictions</Text>
          <Text style={styles.helpTextParagraph}>5.1. You agree not to engage in any activity that interferes with or disrupts the Second Cup Restaurant App, including the servers and networks connected to the app.</Text>
          <Text style={styles.helpTextParagraph}>5.2. You agree not to reproduce, distribute, modify, or create derivative works of any portion of the Second Cup Restaurant App.</Text>
          <Text style={styles.helpFontHeading}>6. Contact Us</Text>
          <Text style={styles.helpTextParagraph}>7.1. If you have any questions or concerns about these Terms and Conditions, please contact us at: </Text>
          <Text style={styles.helpTextParagraph}>Email: info@secondcup.pk </Text>
          <Text style={styles.helpTextParagraph}>Telephone: (051) 28295511-22-33 </Text>
          <Text style={styles.helpTextParagraph}>Thank you for using the Second Cup Restaurant App! We hope you enjoy your dining experience with us. </Text>
          <Button title="Close" onPress={handleCloseTermsModal} style={styles.button} />
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 5,
    elevation: 2,
  },
  helpText: {
    color: 'black',
    fontSize: 16,
    marginTop: 30,
    textAlign: 'center',
    //fontWeight: 'bold',
  },
  helpTextParagraph: {
    fontSize: 20,
    textAlign: 'justify',
    padding: 10,
  },
  helpFontHeading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  termsText: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    //fontWeight: 'bold', 
  },
  feedbackText: {
    color: 'crimson',
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  feedbackModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  feedbackModalText: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff',
  },
  termsModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  helpModalContainer: {
    marginTop: 30,
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  termsModalText: {
    fontSize: 18,
    marginTop: 200,
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    marginVertical: 1,
    fontWeight:'bold',
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
});

export default Settings;