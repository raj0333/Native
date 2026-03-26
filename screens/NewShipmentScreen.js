import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function NewShipmentScreen({ navigation }) {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tireCondition, setTireCondition] = useState('');

  const handleSubmit = () => {
    // Navigate to ShipmentSuccess with the form data
    navigation.navigate('ShipmentSuccess', {
      vehicleNumber,
      driverName,
      origin,
      destination,
      tireCondition,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🚚 New Shipment</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1995/1995470.png' }}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Vehicle Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter vehicle number"
          value={vehicleNumber}
          onChangeText={setVehicleNumber}
        />

        <Text style={styles.label}>Driver Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter driver name"
          value={driverName}
          onChangeText={setDriverName}
        />

        <Text style={styles.label}>Origin</Text>
        <TextInput
          style={styles.input}
          placeholder="Starting location"
          value={origin}
          onChangeText={setOrigin}
        />

        <Text style={styles.label}>Destination</Text>
        <TextInput
          style={styles.input}
          placeholder="Delivery location"
          value={destination}
          onChangeText={setDestination}
        />

        <Text style={styles.label}>Tire Condition</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. New / Good / Replace"
          value={tireCondition}
          onChangeText={setTireCondition}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create Shipment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
