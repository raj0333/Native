import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7fa" />

      <Image
        source={require('../assets/tire.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>CAR</Text>
      <Text style={styles.subtitle}>HAULING</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1f4e8c',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f39c12',
    marginBottom: 40,
  },
});
