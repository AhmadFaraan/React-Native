import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ route }) => {
  const { items, source } = route.params || { items: [], source: '' }; // Ensure items and source are initialized
  const navigation = useNavigation();

  const handleCheckout = () => {
    // Navigate to checkout page
    navigation.navigate('Checkout');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Cart Is Empty</Text>
    </View>
  );

  const renderItemDetails = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemName2}>Size: {item.size}</Text>
      <Text style={styles.itemName2}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemName2}>Special Instructions: {item.specialInstructions}</Text>
      <Text style={styles.itemName2}>Total Price: Rs. {item.totalPrice}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        {/* Back arrow icon */}
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Your Cart</Text>
      {items.length === 0 ? renderEmptyCart() : (
        <FlatList
          data={items}
          renderItem={renderItemDetails}
          keyExtractor={(item) => item.name}
        />
      )}
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
    textAlign: 'center',
  },
  itemImage: {
    width: 350,
    height: 320,
    borderRadius: 10,
    marginBottom: 25,
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  itemName2: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: 'firebrick',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 150,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Cart;
