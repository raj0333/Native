import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView
} from 'react-native';

const ExtraCostUploadScreen = () => {

  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Select Type');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const costTypes = ['Toll', 'Fuel', 'Parking', 'Other'];

  const handleSubmit = () => {
    if (!amount || type === 'Select Type') {
      Alert.alert('Error', 'Please fill required fields');
      return;
    }

    Alert.alert('Success', 'Extra transport cost submitted successfully');
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Upload Extra Transport Cost</Text>

      {/* Vehicle Info */}
      <View style={styles.card}>
        <Text style={styles.label}>Vehicle</Text>
        <Text style={styles.value}>Truck - MH12 AB 1234</Text>

        <Text style={styles.label}>Tire Position</Text>
        <Text style={styles.value}>Driver Side Front</Text>
      </View>

      {/* Amount */}
      <Text style={styles.label}>Amount (₹)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Cost Type */}
      <Text style={styles.label}>Cost Type</Text>
      <View style={styles.dropdown}>
        {costTypes.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setType(item)}>
            <Text style={styles.dropdownItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.selected}>Selected: {type}</Text>

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Enter details"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      {/* Upload Image */}
      <TouchableOpacity style={styles.uploadBtn}>
        <Text style={styles.uploadText}>Upload Receipt</Text>
      </TouchableOpacity>

      {/* Preview */}
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ExtraCostUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 15
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginTop: 10
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    elevation: 1
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 5,
    padding: 10
  },
  dropdownItem: {
    padding: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc'
  },
  selected: {
    marginTop: 5,
    color: '#007BFF'
  },
  uploadBtn: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
  },
  uploadText: {
    color: '#333',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 10,
    borderRadius: 8
  },
  submitBtn: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
