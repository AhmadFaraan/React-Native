import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);
  const autoScrollInterval = 3000; // Auto-scroll interval in milliseconds

  const images = [
    require('../assets/burgerbanner.jpg'),
    require('../assets/foodbanner.jpg'),      //Carousel Banner.
    require('../assets/food2banner.jpg'),
  ];

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
  };

  const scrollToPage = (page) => {
    if (scrollRef.current) {
      setCurrentPage(page);
      scrollRef.current.scrollTo({
        animated: true,
        x: Dimensions.get('window').width * page,
        y: 0,
      });
    }
  };

  const handleAutoScroll = () => {
    const nextPage = (currentPage + 1) % images.length;
    scrollToPage(nextPage);
  };

  useEffect(() => {
    const scrollInterval = setInterval(handleAutoScroll, autoScrollInterval);

    return () => clearInterval(scrollInterval);
  }, [currentPage]);

  const handleManualScroll = (direction) => {
    const nextPage =
      direction === 'right' ? (currentPage + 1) % images.length : (currentPage - 1 + images.length) % images.length;
    scrollToPage(nextPage);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/2ndCup2.webp')} style={styles.logo} resizeMode="contain" />
        {/* Add your header content here */}
      </View>

      {/* Carousel Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentPage ? 1 : 0.5 },
            ]}
          />
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

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.signupTextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={[styles.signupLink, { fontWeight: 'bold' }]}>Back to Login Screen</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>COPYRIGHT: THE SECOND CUP COFFEE COMPANY INC. 2022 </Text>
        <Text>Sialkot</Text>
        <Text>Pakistan - Contact Us</Text>
      </View>
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
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#007bff',
    paddingBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    top: '18%',
    zIndex: 1,
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: '#eee',
  },
});

export default MainScreen;
