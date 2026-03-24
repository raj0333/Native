import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  View as RNView,
  TouchableOpacity,
} from 'react-native';

const TrackShipment = () => {
  return (
    <RNView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Track Shipment</Text>
      </View>

      {/* Truck Section */}
      <View style={styles.truckContainer}>
        <Text style={styles.truckIcon}>🚚</Text>

        {/* Tires */}
        <View style={styles.tireRow}>
          <Image source={require('../assets/tire01.png')} style={styles.tireImg} />
          <Image source={require('../assets/tire01.png')} style={styles.tireImg} />
        </View>
      </View>

      {/* Status Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Shipment Status</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Vehicle:</Text>
          <Text style={styles.value}>UP32 AB 1234</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Driver:</Text>
          <Text style={styles.value}>Ansh</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>Vijay Nagar</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>To:</Text>
          <Text style={styles.value}>Silicon City</Text>
        </View>
      </View>

      {/* Progress Timeline */}
      <View style={styles.timeline}>
        <View style={styles.step}>
          <View style={styles.circleActive} />
          <Text style={styles.stepText}>Shipment Created</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.step}>
          <View style={styles.circleActive} />
          <Text style={styles.stepText}>In Transit</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.step}>
          <View style={styles.circle} />
          <Text style={styles.stepText}>Out for Delivery</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.step}>
          <View style={styles.circle} />
          <Text style={styles.stepText}>Delivered</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh Status</Text>
      </TouchableOpacity>

    </RNView>
  );
};

export default TrackShipment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  header: {
    backgroundColor: '#1e88e5',
    padding: 15,
    alignItems: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  truckContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  truckIcon: {
    fontSize: 60,
  },

  tireRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
tireImg: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  tire: {
    width: 14,
    height: 14,
    backgroundColor: '#000',
    borderRadius: 7,
    marginHorizontal: 10,
  },

  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    padding: 15,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  label: {
    color: '#555',
  },

  value: {
    fontWeight: 'bold',
  },

  timeline: {
    marginHorizontal: 20,
    marginTop: 10,
  },

  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circleActive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1e88e5',
  },

  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ccc',
  },

  line: {
    height: 30,
    width: 2,
    backgroundColor: '#ccc',
    marginLeft: 6,
  },

  stepText: {
    marginLeft: 10,
    fontSize: 14,
  },

  button: {
    backgroundColor: '#1e88e5',
    margin: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});