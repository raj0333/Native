import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VehicleDamageScreen = () => {
  const navigation = useNavigation();

  const [markers, setMarkers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(null);

  const [damageType, setDamageType] = useState('');
  const [severity, setSeverity] = useState('');
  const [notes, setNotes] = useState('');

  // Tap on vehicle image
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    setCurrentPoint({ x: locationX, y: locationY });
    setModalVisible(true);
  };

  // Save damage
  const saveDamage = () => {
    const newDamage = {
      id: Date.now().toString(),
      x: currentPoint.x,
      y: currentPoint.y,
      type: damageType,
      severity: severity,
      notes: notes
    };

    setMarkers([...markers, newDamage]);
    setModalVisible(false);

    setDamageType('');
    setSeverity('');
    setNotes('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Vehicle Damage Inspection</Text>

      {/* Vehicle Image */}
      <TouchableOpacity activeOpacity={1} onPress={handlePress}>
        <View>
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/white-sedan-car-isolated_1308-131050.jpg?t=st=1774518520~exp=1774522120~hmac=fc914f6876afbd013e1adde934cd838b26684a95ca032159dbffd1c050f6864b&w=1060' }}
            style={styles.vehicleImage}
          />

          {/* Markers */}
          {markers.map((item) => (
            <View
              key={item.id}
              style={[
                styles.marker,
                { top: item.y - 10, left: item.x - 10 }
              ]}
            />
          ))}
        </View>
      </TouchableOpacity>

      {/* Damage List */}
      <FlatList
        data={markers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.damageItem}>
            <Text>Type: {item.type}</Text>
            <Text>Severity: {item.severity}</Text>
          </View>
        )}
      />

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.submitBtn}
        onPress={() => navigation.navigate('SubmitReport', { damages: markers })}
      >
        <Text style={styles.submitText}>Submit Report</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Add Damage</Text>

            <TextInput
              placeholder="Damage Type (Scratch/Dent)"
              style={styles.input}
              value={damageType}
              onChangeText={setDamageType}
            />

            <TextInput
              placeholder="Severity (Low/Medium/High)"
              style={styles.input}
              value={severity}
              onChangeText={setSeverity}
            />

            <TextInput
              placeholder="Notes"
              style={styles.input}
              value={notes}
              onChangeText={setNotes}
            />

            <View style={styles.modalBtns}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'red' }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={saveDamage}>
                <Text style={{ color: 'green' }}>Save</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
};

export default VehicleDamageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  vehicleImage: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginTop: 50,
  },
  marker: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10
  },
  damageItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 8
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088'
  },
  modalBox: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 15
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10
  },
  modalBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});