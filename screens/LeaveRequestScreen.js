import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

const LeaveRequestScreen = () => {

  const [type, setType] = useState('Holiday');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const submitRequest = () => {
    if (!reason || !fromDate || !toDate) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    Alert.alert("Success", "Request submitted successfully");

    // Reset
    setReason('');
    setFromDate('');
    setToDate('');
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Request Leave / Illness</Text>

      {/* Type Selection */}
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeButton, type === 'Holiday' && styles.active]}
          onPress={() => setType('Holiday')}
        >
          <Text style={styles.typeText}>Holiday</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeButton, type === 'Illness' && styles.active]}
          onPress={() => setType('Illness')}
        >
          <Text style={styles.typeText}>Illness</Text>
        </TouchableOpacity>
      </View>

      {/* From Date */}
      <Text style={styles.label}>From Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={fromDate}
        onChangeText={setFromDate}
      />

      {/* To Date */}
      <Text style={styles.label}>To Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={toDate}
        onChangeText={setToDate}
      />

      {/* Reason */}
      <Text style={styles.label}>Reason</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter reason..."
        multiline
        value={reason}
        onChangeText={setReason}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={submitRequest}>
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default LeaveRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
    color: '#555'
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  typeContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  typeButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#bfbebe',
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center'
  },
  active: {
    backgroundColor: '#007bff'
  },
  typeText: {
    color: '#fff',
    fontWeight: '600'
  },
  button: {
    marginTop: 25,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});