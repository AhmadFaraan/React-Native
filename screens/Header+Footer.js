import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const renderMenu = () => (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AllMenu')}>
        <Text style={styles.menuItem}>All Items</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.menuItem}>Beverages</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.menuItem}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.menuItem}>Download Menu</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburger Menu */}
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
          <Image source={require('./assets/hammenu.png')} style={styles.hamburgerIcon} resizeMode="contain" />
        </TouchableOpacity>

        {/* Logo */}
        <Image source={require('./assets/2ndCup2.webp')} style={styles.logo} resizeMode="contain" />

        {/* User Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={styles.loginUserIcon}>
          <Icon name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AllMenu')} style={styles.footerIcon}>
            <Icon name="setting" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AllMenu')} style={styles.footerIcon}>
            <Icon name="home" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AllMenu')} style={styles.footerIcon}>
            <Icon name="gift" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AllMenu')} style={styles.footerIcon}>
            <Icon name="shoppingcart" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the Menu */}
      {isMenuVisible && renderMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
    position: 'relative',
  },
  logo: {
    width: 70,
    height: 70,
  },
  loginUserIcon: {
    position: 'absolute',
    right: 15,
  },
  hamburgerContainer: {
    position: 'absolute',
    left: 10,
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#fff',
  },
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align icons with equal spacing
    paddingHorizontal: 0, // Add some horizontal padding for better spacing
  },
  menuContainer: {
    position: 'absolute',
    top: 70,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: 180,
    height: 150,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});

export default App;
