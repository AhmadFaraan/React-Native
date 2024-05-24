import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
    useEffect(() => {
        // Using useEffect for delay purposes..)
        const delay = setTimeout(() => {
            navigation.replace('GenderSelection'); }, 2500);  
        // Navigate to the Main(Here LogIn) screen after the delay.,.,  
        return () => clearTimeout(delay);
        // Clear the timeout if the component unmounts
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/splashnew.jpg')} style={styles.logo} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Setting Any Background Color
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default SplashScreen;
