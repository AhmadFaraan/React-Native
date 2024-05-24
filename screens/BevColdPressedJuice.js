import React, { useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const data = [
  { id: '1', name: 'Mint Lemonade',  image: require('../assets/MintLemonade.webp') },

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

const BevColdPressedJuice = () => {
    const navigation = useNavigation();
    
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemClick = (item) => {
    if (item.id === '1') {
      navigation.navigate('AddToCartColdPressed');
    } 
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburger Menu */}
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
          <Image source={require('../assets/hammenu.png')} style={styles.hamburgerIcon} resizeMode="contain" />
        </TouchableOpacity>

        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Beverages')}>
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
        ListHeaderComponent={() => (
          <View style={styles.listContainer}>
            <Text style={styles.Heading}>COLD PRESSED JUICE</Text>
          </View>
        )}
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
              <Text style={styles.linkText}>Contact Us | Email</Text>
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
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  Heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 350,
    height: 350,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  itemPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  // Footer Styles
  footcontainer: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,

  },
  footlogo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 18,
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
    marginTop: 25,
    fontWeight: 'bold',
  },
});

export default BevColdPressedJuice;