import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Picker, TextInput, Button, Modal, Dimensions, } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AccountDropdown = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedUser, setSelectedUser] = useState('Existing');
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);

  const selectProfilePicture = () => {
    ImagePicker.showImagePicker(
      { title: 'Select Profile Picture', mediaType: 'photo', maxWidth: 300, maxHeight: 300 },
      (response) => {
        if (!response.didCancel && !response.error) {
          setProfilePicture(response.uri);
          setIsImageSelected(true);
        }
      }
    );
  };

  const handleChangePassword = () => {
    // Implement password change logic here
    // For simplicity, just console log the new password
    console.log('New password:', newPassword);
    setChangePasswordModalVisible(false);
  };

  const window = Dimensions.get('window');
  const halfScreenWidth = window.width / 2;
  const halfScreenHeight = window.height / 2;
  
  

  return (
    <View style={[styles.container, { width: halfScreenWidth, height: halfScreenHeight }]}>
      <TouchableOpacity onPress={selectProfilePicture}>
        {isImageSelected ? (
          <Text style={styles.profileText}>Profile Picture Selected</Text>
        ) : (
          <View style={styles.placeholder}>
            <Text>Hi!</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text>user name</Text>

      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Select User:</Text>
        <Picker
          selectedValue={selectedUser}
          onValueChange={(itemValue) => setSelectedUser(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Existing" value="Existing" />
          <Picker.Item label="New" value="New" />
          {/* Add more users as needed */}
        </Picker>
      </View>

      <TouchableOpacity onPress={() => setChangePasswordModalVisible(true)}>
        <Text style={styles.changePasswordLink}>Change Password</Text>
      </TouchableOpacity>

      {/* Change Password Modal */}
      <Modal
        transparent={true}
        visible={isChangePasswordModalVisible}
        onRequestClose={() => setChangePasswordModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Change Password</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder="New Password"
              secureTextEntry
              onChangeText={(text) => setNewPassword(text)}
            />
            <Button title="Change Password" onPress={handleChangePassword} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // Removed flex: 1
  },
  profileText: {
    fontSize: 16,
    marginVertical: 20,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    textAlign:'center',
    fontSize:75,
  },
  dropdownContainer: {
    marginVertical: 10,
  },
  dropdown: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  changePasswordLink: {
    color: 'red',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AccountDropdown;