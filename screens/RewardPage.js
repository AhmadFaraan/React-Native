import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RewardPage = ({ navigation }) => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(100);

  const items = [
    { id: '1', name: 'Item A', points: 20, image: require('../assets/ChilledFavourites.jpg') },
    { id: '2', name: 'Item B', points: 30, image: require('../assets/FrozanYogurtShake.jpg') },
    { id: '3', name: 'Item C', points: 50, image: require('../assets/SignatureBurger.jpg') },
    { id: '4', name: 'Item D', points: 80, image: require('../assets/croissant.webp') },
    { id: '5', name: 'Item E', points: 150, image: require('../assets/Waffles.jpg') },
  ];

  const redeemPoints = (item) => {
    setLoyaltyPoints(loyaltyPoints + item.points);
    alert(`Points redeemed successfully for ${item.name}!`);
  };

  const resetPoints = () => {
    setLoyaltyPoints(0); // Reset points to 0
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => redeemPoints(item)}>
      <View style={styles.itemContent}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.itemPoints}>{`${item.points} Points`}</Text>
        <AntDesign name="gift" size={24} color="gold" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Loyalty Rewards</Text>
      <Text style={styles.points}>Available Points: {loyaltyPoints}</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={[styles.itemList, { marginTop: 20 }]}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetPoints}>
        <Text style={styles.resetButtonText}>Reset Points</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 65,
    left: 20,
    zIndex: 1, // Ensures the button is above other components
    backgroundColor: 'white',
    borderRadius: 50, // Makes it circular
    padding: 3, // Adjust padding as needed
    borderWidth: 1, // Adds a border
    borderColor: 'lightgray', // Border color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 55,
    color: '#333',
    textAlign: 'center',
  },
  points: {
    fontSize: 18,
    marginTop: 40,
    color: '#666',
    textAlign: 'center',
  },
  itemList: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#FF5722',
  },
  resetButton: {
    backgroundColor: 'firebrick',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RewardPage;
