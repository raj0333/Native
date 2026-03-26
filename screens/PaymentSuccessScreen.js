import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const PaymentSuccessScreen = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate('Customer'); // Navigate to Customer screen
  };

  const trackOrder = () => {
    navigation.navigate('TrackShipment'); // your tracking screen
  };

  return (
    <View style={styles.container}>

      {/* Success Icon Circle */}
      <View style={styles.circle}>
        <Text style={styles.check}>✓</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Payment Successful</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your shipment has been confirmed successfully.
      </Text>

      {/* Order Info Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Order ID</Text>
        <Text style={styles.value}>#TRK123456</Text>

        <Text style={styles.label}>Amount Paid</Text>
        <Text style={styles.value}>₹2500</Text>

        <Text style={styles.label}>Payment Method</Text>
        <Text style={styles.value}>Card</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.primaryBtn} onPress={trackOrder}>
        <Text style={styles.btnText}>Track Shipment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={goToHome}>
        <Text style={styles.secondaryText}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#28a745',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 5
  },

  check: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222'
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
    elevation: 3
  },

  label: {
    fontSize: 12,
    color: '#888'
  },

  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },

  primaryBtn: {
    width: '100%',
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  secondaryBtn: {
    padding: 10
  },

  secondaryText: {
    color: '#555',
    fontSize: 14
  }
});