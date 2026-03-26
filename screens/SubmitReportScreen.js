import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

const SubmitReportScreen = ({ route }) => {

  const { damages } = route.params || {};
  const [remarks, setRemarks] = useState('');

  const handleSubmit = () => {
    const payload = {
      damages,
      remarks
    };

    console.log("Final Report:", payload);

    Alert.alert("Success", "Report Submitted Successfully");

    // API call yaha laga sakte ho
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Damage #{index + 1}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Severity: {item.severity}</Text>
      <Text>Notes: {item.notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Final Damage Report</Text>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>
          Total Damages: {damages?.length || 0}
        </Text>
      </View>

      {/* Damage List */}
      <FlatList
        data={damages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Remarks */}
      <Text style={styles.sectionTitle}>Driver Remarks</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter final remarks..."
        value={remarks}
        onChangeText={setRemarks}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Confirm & Submit</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SubmitReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  summaryBox: {
    backgroundColor: '#e8f5e9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32'
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    elevation: 2
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    height: 80,
    textAlignVertical: 'top'
  },
  submitBtn: {
    marginTop: 15,
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});