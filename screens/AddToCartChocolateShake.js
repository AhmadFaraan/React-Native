import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the back arrow icon
import { useNavigation } from '@react-navigation/native';

const AddToCartChocolateShake = () => {
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('medium'); // Default size
  const [specialInstructions, setSpecialInstructions] = useState('');
  const price = {
    small: 599,
    medium: 699,
    big: 599,
  };
  const imageUrl = 'https://secondcup.pk/wp-content/uploads/2022/12/chocolateshake.png'; // Set your product image URL

  // Function to add item to cart
  const addToCart = () => {
    const item = {
      name: 'Chocolate Shake',
      image: imageUrl,
      size: size,
      quantity: quantity,
      specialInstructions: specialInstructions,
      totalPrice: price[size] * quantity,
    };
    // Navigate to Cart.js and pass the item data as a parameter
    navigation.navigate('Cart', { items: [item] });

  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleSpecialInstructionsChange = (text) => {
    setSpecialInstructions(text);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        {/* Back arrow icon */}
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.productImage} />
        <Text style={styles.imageText}>Chocolate Shake</Text>
      </View>

      <Text style={styles.priceText}>Rs. {price[size]}</Text>

      {/* Size Options */}
      <View style={styles.sizeOptionsContainer}>
        <TouchableOpacity
          style={[styles.sizeOption, size === 'small' && styles.selectedSizeOption]}
          onPress={() => handleSizeSelection('small')}
        >
          <Text style={styles.sizeOptionText}>Small</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sizeOption, size === 'medium' && styles.selectedSizeOption]}
          onPress={() => handleSizeSelection('medium')}
        >
          <Text style={styles.sizeOptionText}>Medium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sizeOption, size === 'big' && styles.selectedSizeOption]}
          onPress={() => handleSizeSelection('big')}
        >
          <Text style={styles.sizeOptionText}>Large</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Special Instructions Text Input */}
      <TextInput
        style={styles.specialInstructionsInput}
        placeholder="Special Instructions"
        multiline
        numberOfLines={4}
        value={specialInstructions}
        onChangeText={handleSpecialInstructionsChange}
      />

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  productImage: {
    width: 350,
    height: 420,
    marginBottom: 16,
    marginTop: -40,
  },
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  priceText: {
    fontSize: 18,
    marginBottom: 16,
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  sizeOption: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d0d0d0',
  },
  selectedSizeOption: {
    backgroundColor: 'firebrick',
    borderColor: 'black',
  },
  sizeOptionText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 16,
    color: 'black',
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 16,
  },
  specialInstructionsInput: {
    width: '80%',
    fontWeight: 'bold',
    height: 100,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  addToCartButton: {
    backgroundColor: 'firebrick',
    padding: 16,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddToCartChocolateShake;
