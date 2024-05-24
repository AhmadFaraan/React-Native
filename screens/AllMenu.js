import React, { useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const bannerImage = require('../assets/MenuBanner.jpg');
const data = [
  { id: '0', type: 'banner', image: require('../assets/MenuBanner.jpg') },
  { id: '1', type: 'item', image: require('../assets/Beverages.webp') },
  { id: '2', type: 'item', image: require('../assets/Food.webp') },
];

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


const AllMenu = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDownloadMenu = () => {
    Linking.openURL('https://drive.google.com/file/d/1-Jgaiz4eETaVz9k1JocAbXwX6BvwVDy5/view?usp=sharing'); 
  };

                                       // HamBurger Menu Dropdown
  const renderMenu = () => (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AllMenu')}>
        <Text style={styles.menuItem}>All Items</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Beverages')}>
        <Text style={styles.menuItem}>Beverages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Food')}>
        <Text style={styles.menuItem}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDownloadMenu}>
        <Text style={styles.menuItem}>Download Menu</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    if (item.type === 'banner') {
      return (
        <Image source={item.image} style={styles.bannerImage} />
      );
    } else {
      let itemName;
      if (item.id === '1') {
        itemName = 'BEVERAGES';
      } else if (item.id === '2') {
        itemName = 'FOOD';
      }

      return (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{itemName}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const handleItemClick = (item) => {
    // Handle item click here
    if (item.id === '1') {
      navigation.navigate('Beverages');
    } else if (item.id === '2') {
      navigation.navigate('Food');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburger Menu */}
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
          <Image source={require('../assets/hammenu.png')} style={styles.hamburgerIcon} resizeMode="contain" />
        </TouchableOpacity>

        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <Image source={require('../assets/2ndCup2.webp')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>

        {/* User Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('LogScreen')} style={styles.loginUserIcon}>
          <AntDesignIcon name="user" size={33} color="black" />
        </TouchableOpacity>
      </View>
      {/* FlatList for the main list */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatList} 
        // Add footer content 
        ListFooterComponent={() => (
          <View style={styles.footcontainer}>
            <Image
              source={require('../assets/footerimage.jpg')}
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
              <Text style={styles.linkText}>Contact Us | Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* Render the Menu */}
      {isMenuVisible && renderMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginBottom: 50,
  },
  itemContainer: {
    padding: 10,
    marginTop: 5,
    marginVertical: 10,
    width: '100%',
  },
  itemImage: {
    width: '100%',
    height: 350,
    borderRadius: 0,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 16,
  },
  //header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
    marginTop: 30,
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
  menuContainer: {
    position: 'absolute',
    top: 100,
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
  flatList: {
    borderWidth: 0, // Remove the default border
  },
  //Footer styles
  footcontainer: {
    backgroundColor: 'black', 
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
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

export default AllMenu;
