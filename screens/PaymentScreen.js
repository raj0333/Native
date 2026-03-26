import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !name || !expiry || !cvv) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (cardNumber.length < 16) {
      Alert.alert('Invalid', 'Card number must be 16 digits');
      return;
    }

    // Navigate to PaymentSuccessScreen on successful payment
    navigation.navigate('PaymentSuccess');
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <Text style={styles.title}>Proceed Payment</Text>
      <Text style={styles.subtitle}>
        Secure your shipment with fast payment
      </Text>

      {/* Order Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Shipment Details</Text>
        <Text style={styles.text}>Vehicle Type: Truck 🚛</Text>
        <Text style={styles.text}>Distance: 120 km</Text>
        <Text style={styles.text}>Amount: ₹2500</Text>
      </View>

      {/* Payment Form */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Card Details</Text>

        <TextInput
          placeholder="Card Number"
          keyboardType="numeric"
          maxLength={16}
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <TextInput
          placeholder="Card Holder Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="MM/YY"
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            value={expiry}
            onChangeText={setExpiry}
          />

          <TextInput
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            style={[styles.input, { flex: 1 }]}
            value={cvv}
            onChangeText={setCvv}
          />
        </View>
      </View>

      {/* Pay Button */}
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now ₹2500</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222'
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  text: {
    fontSize: 14,
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12
  },

  button: {
    backgroundColor: '#ff6b00',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});