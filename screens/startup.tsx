import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const StartupScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home')
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./R.jpeg')} // Change this to the path of your background image
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./S.png')} // Change this to the path of your logo
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220, // Adjust this according to your requirements
    height: 220, // Adjust this according to your requirements
    resizeMode: 'contain',
  },
});

export default StartupScreen;