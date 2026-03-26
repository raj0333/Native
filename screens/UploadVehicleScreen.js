import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UploadVehicleScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const [vehicleImages, setVehicleImages] = useState({
    front: null,
    back: null,
    side: null,
  });

  const [documents, setDocuments] = useState({
    rc: null,
    insurance: null,
    license: null,
  });

  const pickImage = (type, key) => {
    Alert.alert(
      "Upload Image",
      "Choose option",
      [
        {
          text: "Camera",
          onPress: () => openCamera(type, key)
        },
        {
          text: "Gallery",
          onPress: () => openGallery(type, key)
        },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const openCamera = (type, key) => {
    launchCamera({ mediaType: 'photo', quality: 0.7 }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        handleImage(response.assets[0].uri, type, key);
      }
    });
  };

  const openGallery = (type, key) => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        handleImage(response.assets[0].uri, type, key);
      }
    });
  };

  const handleImage = (uri, type, key) => {
    if (type === 'vehicle') {
      setVehicleImages({ ...vehicleImages, [key]: uri });
    } else {
      setDocuments({ ...documents, [key]: uri });
    }
  };

  const renderBox = (label, image, type, key) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => pickImage(type, key)}
    >
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text style={styles.placeholder}>+ Upload</Text>
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Documents Uploaded Successfully");
    }, 2000);
  };

  return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Upload Vehicle</Text>
          <TouchableOpacity style={styles.damageButton} onPress={() => navigation.navigate('VehicleDamage')}>
            <Text style={styles.damageButtonText}>Damage Management</Text>
          </TouchableOpacity>
        </View>

      {/* Vehicle Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Vehicle Photos</Text>

        <View style={styles.row}>
          {renderBox("Front", vehicleImages.front, 'vehicle', 'front')}
          {renderBox("Back", vehicleImages.back, 'vehicle', 'back')}
          {renderBox("Side", vehicleImages.side, 'vehicle', 'side')}
        </View>
      </View>

      {/* Document Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Documents</Text>

        <View style={styles.row}>
          {renderBox("RC", documents.rc, 'doc', 'rc')}
          {renderBox("Insurance", documents.insurance, 'doc', 'insurance')}
          {renderBox("License", documents.license, 'doc', 'license')}
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>

      </ScrollView>
  );
};

export default UploadVehicleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
  },
  damageButton: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
  },
  damageButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box: {
    width: '30%',
    height: 110,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  placeholder: {
    fontSize: 12,
    color: '#888',
  },

  label: {
    position: 'absolute',
    bottom: 5,
    fontSize: 10,
    color: '#333',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20,
  },
});