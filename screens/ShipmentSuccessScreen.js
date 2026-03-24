// ShipmentSuccessScreen.js
// React Native (CLI, no Expo)
// Uses local images instead of vector icons (Android-friendly)

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const ShipmentSuccessScreen = ({ navigation, route }) => {
  const { vehicleNumber, driverName, origin, destination, tireCondition } = route.params || {};

  return (
    <View style={styles.container}>

      {/* Success Image */}
      <Image
        source={require('../assets/success.png')}
        style={styles.successImage}
      />

      {/* Title */}
      <Text style={styles.title}>Shipment Created!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your logistics shipment has been successfully created and assigned.
      </Text>

      {/* Truck Image */}
      <View style={styles.vehicleContainer}>
        <Image
          source={require('../assets/truck.png')}
          style={styles.truckImage}
        />

        {/* Tires (clipart style) */}
        <View style={styles.tireRow}>
          <Image source={require('../assets/tire01.png')} style={styles.tireImg} />
          <Image source={require('../assets/tire01.png')} style={styles.tireImg} />
        </View>
      </View>

      {/* Shipment Details Card */}
      <View style={styles.detailsCard}>
        <Text style={styles.detailsTitle}>Shipment Details</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Vehicle Number:</Text>
          <Text style={styles.detailValue}>{vehicleNumber || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Driver Name:</Text>
          <Text style={styles.detailValue}>{driverName || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Origin:</Text>
          <Text style={styles.detailValue}>{origin || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Destination:</Text>
          <Text style={styles.detailValue}>{destination || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tire Condition:</Text>
          <Text style={styles.detailValue}>{tireCondition || 'N/A'}</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('TrackShipment')}>
        <Text style={styles.btnText}>Track Shipment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('CustomerScreen')}>
        <Text style={styles.secondaryText}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ShipmentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginVertical: 10,
  },
  vehicleContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  truckImage: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
  },
  tireRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.25,
    marginTop: 5,
  },
  tireImg: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  detailsCard: {
    marginTop: 25,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  detailLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  primaryBtn: {
    marginTop: 25,
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryBtn: {
    marginTop: 15,
  },
  secondaryText: {
    color: '#3498db',
    fontSize: 14,
  },
});

/*
👉 Required Assets (place inside /assets folder):

1. success.png  (tick success icon)
2. truck.png    (logistics truck clipart)
3. tire.png     (round tire image)

📌 No external libraries needed
📌 Fully Android (Java) compatible
📌 Works without Expo & vector icons
*/
