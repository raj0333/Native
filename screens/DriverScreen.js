import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with Truck Background and Driver Info */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20250913/pngtree-big-size-truck-vehicle-racing-wheel-background-image_19302547.webp' }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        <View style={styles.driverInfo}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/user.png' }}
            style={styles.driverImage}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.driverName}>Welcome Driver</Text>
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/hand.png' }}
              style={styles.handIcon}
            />
          </View>
        </View>
      </View>

      {/* Map Section */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DriverRoute')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/map.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Best Route Navigation</Text>
        <Text style={styles.cardDesc}>Open Google Maps for optimized route</Text>
      </TouchableOpacity>

      {/* Delivery Reports */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DriverReport')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/report-card.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Delivery Reports</Text>
        <Text style={styles.cardDesc}>View & manage delivery/collection reports</Text>
      </TouchableOpacity>

      {/* Upload Photos */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UploadPhotos')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/camera.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Upload Vehicle Photos</Text>
        <Text style={styles.cardDesc}>Upload vehicle & documents</Text>
      </TouchableOpacity>

      {/* Upload Documents */}
      {/* <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UploadPhotos')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/document.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Upload Documents</Text>
        <Text style={styles.cardDesc}>Upload vehicle & documents</Text>
      </TouchableOpacity> */}

      {/* Transport Cost */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ExtraCostUpload')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/money.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Transport Cost</Text>
        <Text style={styles.cardDesc}>Upload fuel & trip expenses</Text>
      </TouchableOpacity>

      {/* Leave Request */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Leave')}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/calendar.png' }}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Leave / Sick Request</Text>
        <Text style={styles.cardDesc}>Apply for holidays or illness</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Bottom spacing */}
      <View style={{ height: 30 }} />

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8'
  },
  header: {
    position: 'relative',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)' // RGB overlay with 40% opacity
  },
  driverInfo: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 2
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  handIcon: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff'
  },
  driverName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    alignItems: 'center'
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  cardDesc: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 5
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 15
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
