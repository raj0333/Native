import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const InvoiceScreen = () => {
  const navigation = useNavigation();

  const services = [
    { name: "Emergency Road Service", price: 50 },
    { name: "Tire Change", price: 20 },
    { name: "Car Wash", price: 15 },
    { name: "Sanitization", price: 10 },
    { name: "Full Tank Delivery", price: 60 }
  ];

  const baseService = 100;

  const servicesTotal = services.reduce((sum, s) => sum + s.price, 0);
  const total = baseService + servicesTotal;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Payment Invoice</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Invoice ID</Text>
        <Text style={styles.value}>INV-20458</Text>

        <Text style={styles.label}>Customer</Text>
        <Text style={styles.value}>Rahul Sharma</Text>

        <Text style={styles.label}>Vehicle</Text>
        <Text style={styles.value}>Tata Truck 407</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Service Details</Text>

        <View style={styles.row}>
          <Text style={styles.service}>Base Logistics Service</Text>
          <Text style={styles.price}>$100</Text>
        </View>

        {services.map((item,index)=>(
          <View key={index} style={styles.row}>
            <Text style={styles.service}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        ))}

      </View>


      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalPrice}>${total}</Text>
      </View>


      <TouchableOpacity 
        style={styles.payButton}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.payText}>Proceed to Payment</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default InvoiceScreen;


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f4f6fa",
    padding:20
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:20
  },

  card:{
    backgroundColor:"#fff",
    padding:18,
    borderRadius:12,
    marginBottom:15,
    elevation:3
  },

  label:{
    fontSize:14,
    color:"#777",
    marginTop:5
  },

  value:{
    fontSize:16,
    fontWeight:"600",
    marginBottom:5
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:6,
    borderBottomWidth:0.5,
    borderColor:"#ddd"
  },

  service:{
    fontSize:16
  },

  price:{
    fontSize:16,
    fontWeight:"500"
  },

  totalBox:{
    backgroundColor:"#eaf3ff",
    padding:20,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15
  },

  totalText:{
    fontSize:18,
    fontWeight:"bold"
  },

  totalPrice:{
    fontSize:22,
    fontWeight:"bold",
    color:"#2e86de"
  },

  payButton:{
    backgroundColor:"#2e7d32",
    padding:16,
    borderRadius:10
  },

  payText:{
    color:"#fff",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
  }

});