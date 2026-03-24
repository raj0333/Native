import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';
import CustomerScreen from '../screens/CustomerScreen';
import DriverScreen from '../screens/DriverScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
import NewShipmentScreen from '../screens/NewShipmentScreen';
import ShipmentSuccessScreen from '../screens/ShipmentSuccessScreen';
import TrackShipmentScreen from '../screens/TrackShipmentScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
        <Stack.Screen name="NewShipment" component={NewShipmentScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2f80ed',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="ShipmentSuccess" component={ShipmentSuccessScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2ecc71',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="TrackShipment" component={TrackShipmentScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#1e88e5',
          },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
