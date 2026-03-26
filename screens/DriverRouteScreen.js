import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';

const DriverRouteScreen = ({ navigation, route }) => {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get pickup and drop from navigation params or use defaults
  const pickup = route.params?.pickup || route.params?.origin || "Bhopal Railway Station";
  const drop = route.params?.drop || route.params?.destination || "Indore Silicon City";

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      pickup
    )}&destination=${encodeURIComponent(drop)}&travelmode=driving`;

    Linking.openURL(url).catch(() => {
      Alert.alert("Error", "Google Maps not supported");
    });
  };

  const calculateRoute = async () => {
    setLoading(true);
    try {
      // Use Google Maps Distance Matrix API
      // Note: You need to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
      // and enable the Distance Matrix API in your Google Cloud Console
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; 
      const origin = encodeURIComponent(pickup);
      const destination = encodeURIComponent(drop);
      
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=driving&key=${apiKey}`
      );
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.rows[0].elements[0].status === 'OK') {
        const distanceText = data.rows[0].elements[0].distance.text;
        const durationText = data.rows[0].elements[0].duration.text;
        
        setDistance(distanceText);
        setDuration(durationText);
      } else {
        // Fallback to static values if API fails
        setDistance('190 km');
        setDuration('3h 20m');
        console.warn('Using fallback values:', data.status);
      }
    } catch (error) {
      console.error("Route calculation error:", error);
      // Fallback to static values if network request fails
      setDistance('190 km');
      setDuration('3h 20m');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateRoute();
  }, [pickup, drop]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/back.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Route Suggestion</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pickup Location</Text>
        <Text style={styles.value}>{pickup}</Text>

        <Text style={styles.label}>Drop Location</Text>
        <Text style={styles.value}>{drop}</Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Distance</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#2e7d32" />
          ) : (
            <Text style={styles.infoValue}>{distance || 'Calculating...'}</Text>
          )}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>ETA</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#2e7d32" />
          ) : (
            <Text style={styles.infoValue}>{duration || 'Calculating...'}</Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={openGoogleMaps}>
        <Text style={styles.buttonText}>Start Navigation</Text>
      </TouchableOpacity>

    </View>
  );
};

export default DriverRouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    elevation: 3,
  },
  infoLabel: {
    fontSize: 13,
    color: '#777',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});