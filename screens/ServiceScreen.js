import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const ServiceScreen = () => {

  const baseService = 100;

  const [name, setName] = useState("");
  const [carModel, setCarModel] = useState("");

  const [emergency, setEmergency] = useState(false);
  const [carWash, setCarWash] = useState(false);
  const [sanitize, setSanitize] = useState(false);
  const [tireChange, setTireChange] = useState(false);
  const [fullTank, setFullTank] = useState(false);

  const [total, setTotal] = useState(baseService);

  const navigation = useNavigation();

  useEffect(() => {

    let price = baseService;

    if (emergency) price += 50;
    if (carWash) price += 15;
    if (sanitize) price += 10;
    if (tireChange) price += 20;
    if (fullTank) price += 60;

    setTotal(price);

  }, [emergency, carWash, sanitize, tireChange, fullTank]);

  const confirmService = () => {

    if (!name || !carModel) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Navigate to ConfirmedServiceScreen with service details
    navigation.navigate('ConfirmedService', {
      customerName: name,
      carModel: carModel,
      services: {
        emergency,
        carWash,
        sanitize,
        tireChange,
        fullTank
      },
      total: total
    });
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>New Service Entry</Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />

      <Text style={styles.sectionTitle}>Select Services</Text>

      <View style={styles.serviceRow}>
        <Text style={styles.serviceText}>Emergency Service (+$50)</Text>
        <Switch value={emergency} onValueChange={setEmergency}/>
      </View>

      <View style={styles.serviceRow}>
        <Text style={styles.serviceText}>Car Wash (+$15)</Text>
        <Switch value={carWash} onValueChange={setCarWash}/>
      </View>

      <View style={styles.serviceRow}>
        <Text style={styles.serviceText}>Sanitization (+$10)</Text>
        <Switch value={sanitize} onValueChange={setSanitize}/>
      </View>

      <View style={styles.serviceRow}>
        <Text style={styles.serviceText}>Tire Change (+$20)</Text>
        <Switch value={tireChange} onValueChange={setTireChange}/>
      </View>

      <View style={styles.serviceRow}>
        <Text style={styles.serviceText}>Full Tank on Delivery (+$60)</Text>
        <Switch value={fullTank} onValueChange={setFullTank}/>
      </View>

      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>Live Quote</Text>
        <Text style={styles.price}>${total}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={confirmService}>
        <Text style={styles.buttonText}>Confirm Service</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f5f6fa",
    padding:20
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:20
  },

  input:{
    backgroundColor:"#fff",
    padding:12,
    borderRadius:8,
    marginBottom:15,
    borderWidth:1,
    borderColor:"#ddd"
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:"600",
    marginBottom:10
  },

  serviceRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#fff",
    padding:14,
    borderRadius:8,
    marginBottom:10
  },

  serviceText:{
    fontSize:16
  },

  quoteBox:{
    marginTop:20,
    padding:20,
    backgroundColor:"#27ae60",
    borderRadius:10,
    alignItems:"center"
  },

  quoteText:{
    fontSize:18,
    marginBottom:5,
    color:"#fff"
  },

  price:{
    fontSize:28,
    fontWeight:"bold",
    color:"#fff"
  },

  button:{
    marginTop:20,
    backgroundColor:"#2e86de",
    padding:15,
    borderRadius:10
  },

  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
  }

});