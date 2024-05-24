import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const MainScreen = () => {
  const navigation = useNavigation();

  const [currentPage1, setCurrentPage1] = useState(0);
  const scrollRef1 = useRef(null);

  const [currentPage2, setCurrentPage2] = useState(0);
  const scrollRef2 = useRef(null);

  const autoScrollInterval = 3000;

                                           // 1st Carousal Fucntions...
  const images = [
    require('../assets/HollyJollyBanner.webp'),
    require('../assets/MenuBanner.jpg'),
    require('../assets/BannerCup.jpg'),
  ];

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage1(pageNum);
  };

  const handleManualScroll = (direction) => {
    const nextPage =
      direction === 'right' ? (currentPage1 + 1) % images.length : (currentPage1 - 1 + images.length) % images.length;
    setCurrentPage1(nextPage);
    scrollRef1.current?.scrollTo({
      animated: true,
      x: Dimensions.get('window').width * nextPage,
      y: 0,
    });
  };

  const handleAutoScroll = () => {
    const nextPage = (currentPage1 + 1) % images.length;
    setCurrentPage1(nextPage);
    scrollRef1.current?.scrollTo({
      animated: true,
      x: Dimensions.get('window').width * nextPage,
      y: 0,
    });
  };

  useEffect(() => {
    const scrollInterval = setInterval(handleAutoScroll, autoScrollInterval);

    return () => clearInterval(scrollInterval);
  }, [currentPage1]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

                                                 //2nd Carousal Functions...
  const images2 = [
    require('../assets/TeryakiSandwich.webp'),
    require('../assets/CookiesShakeforSlider.webp'),
    require('../assets/BrownieForSlider.webp'),
    require('../assets/PizzaForSlider.webp'),
    require('../assets/LotusCakeForSlider.jpeg'),
  ];
                                                   // Images Navigation
  const handleImageClick2 = (page) => {
    // Customize this function to navigate to different screens based on the clicked image in the second carousel
    switch (page) {
      case 1:
        navigation.navigate('Food_SandwichesAndWraps');
        break;
      case 2:
        navigation.navigate('Food_Breakfast');
        break;
      case 3:
        navigation.navigate('Food_Desserts');
        break;
      case 4:
        navigation.navigate('Food_Desserts');
        break;
      case 5:
        navigation.navigate('Food_Desserts');
        break;
      default:
        // Handle default case or leave it empty
        break;
    }
  };

  const handleScroll2 = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage2(pageNum);
  };

  const handleManualScroll2 = (direction) => {
    const nextPage =
      direction === 'right' ? (currentPage2 + 1) % images2.length : (currentPage2 - 1 + images2.length) % images2.length;
    setCurrentPage2(nextPage);
    scrollRef2.current?.scrollTo({
      animated: true,
      x: Dimensions.get('window').width * nextPage,
      y: 0,
    });
  };

  const handleAutoScroll2 = () => {
    const nextPage = (currentPage2 + 1) % images2.length;
    setCurrentPage2(nextPage);
    scrollRef2.current?.scrollTo({
      animated: true,
      x: Dimensions.get('window').width * nextPage,
      y: 0,
    });
  };

  useEffect(() => {
    const scrollInterval = setInterval(handleAutoScroll2, autoScrollInterval);

    return () => clearInterval(scrollInterval);
  }, [currentPage2]);

  const handleDownloadMenu = () => {
    Linking.openURL('https://drive.google.com/file/d/1-Jgaiz4eETaVz9k1JocAbXwX6BvwVDy5/view?usp=sharing'); 
  };

                                       // HamBurger Menu Dropdown
  const renderMenu = () => (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AllMenu')}>
        <Text style={styles.menuItem}>All Items</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Beverages2')}>
        <Text style={styles.menuItem}>Beverages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Food2')}>
        <Text style={styles.menuItem}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDownloadMenu}>
        <Text style={styles.menuItem}>Download Menu</Text>
      </TouchableOpacity>
    </View>
  );

  const [isMenuVisible, setIsMenuVisible] = useState(false);

                                            // Main Code started...
  return (
    <View style={styles.container}>
                                                {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
          <Image source={require('../assets/hammenu.png')} style={styles.hamburgerIcon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <Image source={require('../assets/2ndCup2.webp')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogScreen')} style={styles.loginUserIcon}>
          <Icon name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>

                                            {/* 1st Carousel Slider */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={handleScroll} ref={scrollRef1}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} resizeMode="cover" />
        ))}
      </ScrollView>

       {/* Pagination Dots */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View key={index} style={[styles.paginationDot, { opacity: index === currentPage1 ? 1 : 0.5 }]} />
        ))}
      </View>

                                          {/* Manual Scroll Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => handleManualScroll('left')}>
          <View style={styles.controlButton}>
            <Text>{'<'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleManualScroll('right')}>
          <View style={styles.controlButton}>
            <Text>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </View>

                                             {/* 2nd Carousal Slider */}
      <View style={styles.carouselContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.description}>HOT SELLING</Text>
        </View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={handleScroll2} ref={scrollRef2} style={styles.carousel}>
          {images2.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handleImageClick2(index + 1)}>
              <Image source={image} style={styles.carousal_image} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Pagination Dots */}
        <View style={styles.pagination2}>
          {images2.map((_, index) => (
            <View key={index} style={[styles.paginationDot2, { opacity: index === currentPage2 ? 1 : 0.5 }]} />
          ))}
        </View>

                                               {/* Manual Scroll Controls */}
        <View style={styles.controls2}>
          <TouchableOpacity onPress={() => handleManualScroll2('left')}>
            <View style={styles.controlButton2}>
              <Text>{'<'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleManualScroll2('right')}>
            <View style={styles.controlButton2}>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

                                                    {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.footerIcon}>
            <Icon name="setting" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')} style={styles.footerIcon}>
            <Icon name="questioncircle" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RewardPage')} style={styles.footerIcon}>
            <Icon name="gift" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.footerIcon}>
            <Icon name="shoppingcart" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {isMenuVisible && renderMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signupTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
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
  image: {
    width: Dimensions.get('window').width,
    height: 280,
  },
  cartIcon: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  settingsGear: {
    position: 'absolute',
    bottom: 40,
    right: 340,
  },
  homeIcon: {
    position: 'absolute',
    bottom: 40,
    right: 240,
  },
  rewardsGift: {
    position: 'absolute',
    bottom: 40,
    right: 140,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: '27%',
    width: '100%',
    position: 'absolute',
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 12,
  },
                               //second carousal
  carouselContainer: {
    backgroundColor: 'black',
    height: 401, 
    //marginTop: 1,
  },
  textContainer: {
    marginTop: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  carousel: {
   // flexDirection: 'row',
   marginTop: 24,
  },
   carousal_image: {
    width: Dimensions.get('window').width,
    height: 270,
  },
  pagination2: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot2: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  controls2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: '54%',
    width: '100%',
    position: 'absolute',
  },
  controlButton2: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
});

export default MainScreen; 
