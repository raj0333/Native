import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import WebView for Android map rendering
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

const TrackOrderScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.2);
  const spinAnim = new Animated.Value(0);

  // Map coordinates (example: Delhi to Mumbai route)
  const startLat = 28.7041;
  const startLng = 77.1025;
  const endLat = 19.0760;
  const endLng = 72.8777;
  const truckLat = 24.5854; // Current truck position (somewhere between)
  const truckLng = 73.7125;

  // Generate HTML for map
  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Route Map</title>
      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          background: #f0f0f0;
        }
      </style>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    </head>
    <body>
      <div id="map"></div>
      <script>
        const map = L.map('map').setView([${truckLat}, ${truckLng}], 6);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Draw route line
        const route = L.polyline([
          [${startLat}, ${startLng}],
          [${truckLat}, ${truckLng}],
          [${endLat}, ${endLng}]
        ], { color: '#2E86DE', weight: 4 }).addTo(map);

        // Add start marker
        L.marker([${startLat}, ${startLng}], {
          icon: L.divIcon({
            html: '<div style="width:12px;height:12px;border-radius:50%;background:#27AE60;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
            className: 'start-marker'
          })
        }).addTo(map).bindPopup('Origin: Delhi');

        // Add destination marker
        L.marker([${endLat}, ${endLng}], {
          icon: L.divIcon({
            html: '<div style="width:12px;height:12px;border-radius:50%;background:#E74C3C;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
            className: 'dest-marker'
          })
        }).addTo(map).bindPopup('Destination: Mumbai');

        // Add truck icon
        const truckIcon = L.divIcon({
          html: '<div style="transform: rotate(45deg);"><svg width="30" height="20" viewBox="0 0 30 20"><path d="M2 5h20v10H8l-3 3V15H2V5z" fill="#2E86DE" stroke="#fff" stroke-width="1"/><rect x="6" y="10" width="4" height="3" fill="#fff"/></svg></div>',
          className: 'truck-marker'
        });

        const truckMarker = L.marker([${truckLat}, ${truckLng}], {
          icon: truckIcon,
          rotationAngle: 45
        }).addTo(map);

        // Fit bounds to show entire route
        map.fitBounds(route.getBounds(), { padding: [50, 50] });
      </script>
    </body>
    </html>
  `;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    const interval = setInterval(() => {
      setProgress(prev => (prev < 1 ? prev + 0.2 : 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track Order</Text>
      </View>

      {/* Truck + Tire Animation */}
      <View style={styles.truckContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1001/1001230.png' }}
          style={styles.truckImage}
        />

        <Animated.Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/808/808476.png' }}
          style={[styles.tire, { transform: [{ rotate: spin }] }]}
        />

        <Animated.Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/808/808476.png' }}
          style={[styles.tire2, { transform: [{ rotate: spin }] }]}
        />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressSection}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>

        <View style={styles.stepsRow}>
          <Text style={styles.step}>Packed</Text>
          <Text style={styles.step}>Shipped</Text>
          <Text style={styles.step}>Out for Delivery</Text>
          <Text style={styles.step}>Delivered</Text>
        </View>
      </View>

      {/* Map Section */}
      <View style={styles.mapSection}>
        <Text style={styles.mapTitle}>Live Route Tracking</Text>
        <View style={styles.mapContainer}>
          <WebView
            originWhitelist={['*']}
            source={{ html: mapHtml }}
            style={styles.map}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scrollEnabled={false}
          />
        </View>
      </View>

      {/* Order Details */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Order Details</Text>

        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/709/709496.png' }} style={styles.icon} />
          <Text style={styles.text}>Order ID: #LOG12345</Text>
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png' }} style={styles.icon} />
          <Text style={styles.text}>Driver: Mohan Singh</Text>
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/743/743922.png' }} style={styles.icon} />
          <Text style={styles.text}>Vehicle: MP09AB1234</Text>
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/992/992700.png' }} style={styles.icon} />
          <Text style={styles.text}>ETA: 1 hr 30 min</Text>
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }} style={styles.icon} />
          <Text style={styles.text}>Location: Near Bhopal Highway</Text>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E86DE',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  truckContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  truckImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  tire: {
    position: 'absolute',
    bottom: -10,
    left: width / 2 - 40,
    width: 30,
    height: 30,
  },
  tire2: {
    position: 'absolute',
    bottom: -10,
    left: width / 2 + 10,
    width: 30,
    height: 30,
  },
  progressSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#27AE60',
  },
  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  step: {
    fontSize: 10,
    color: '#555',
  },
  mapSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  mapContainer: {
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  card: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TrackOrderScreen;