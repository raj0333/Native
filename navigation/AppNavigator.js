import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';
import CustomerScreen from '../screens/CustomerScreen';
import DriverScreen from '../screens/DriverScreen';
import DriverRouteScreen from '../screens/DriverRouteScreen';
import DriverReportScreen from '../screens/DriverReportScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
import NewShipmentScreen from '../screens/NewShipmentScreen';
import ShipmentSuccessScreen from '../screens/ShipmentSuccessScreen';
import TrackShipmentScreen from '../screens/TrackShipmentScreen';
import QuoteScreen from '../screens/QuoteScreen';
import ServiceScreen from '../screens/ServiceScreen';
import ConfirmedServiceScreen from '../screens/ConfirmedServiceScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen';
import UploadVehicleScreen from '../screens/UploadVehicleScreen';
import VehicleDamageScreen from '../screens/VehicleDamageScreen';
import SubmitReportScreen from '../screens/SubmitReportScreen';
import ExtraCostUploadScreen from '../screens/ExtraCostUploadScreen';

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
        <Stack.Screen name="DriverRoute" component={DriverRouteScreen} />
        <Stack.Screen name="DriverReport" component={DriverReportScreen} />
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
        <Stack.Screen name="NewShipment" component={NewShipmentScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white', 
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
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
            backgroundColor: '#2e7d32',
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
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Quote" component={QuoteScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Service" component={ServiceScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#27ae60',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="ConfirmedService" component={ConfirmedServiceScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#27ae60',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#ff6b00',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#28a745',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="UploadPhotos" component={UploadVehicleScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="VehicleDamage" component={VehicleDamageScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="SubmitReport" component={SubmitReportScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="ExtraCostUpload" component={ExtraCostUploadScreen} options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
