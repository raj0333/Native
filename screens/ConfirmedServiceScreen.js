import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView
} from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';

const ConfirmedServiceScreen = () => {

const route = useRoute();
const navigation = useNavigation();
const { customerName, carModel, services, total } = route.params || {};

const serviceNames = [
"Emergency Service",
"Car Wash",
"Sanitization",
"Tire Change",
"Full Tank on Delivery"
];

const selectedServices = serviceNames.filter((_, index) => {
  const keys = ['emergency', 'carWash', 'sanitize', 'tireChange', 'fullTank'];
  return services && services[keys[index]];
});

const handleTrackVehicle = () => {
  navigation.navigate('TrackOrder');
};

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>Service Confirmation</Text>

<View style={styles.card}>

<Text style={styles.sectionTitle}>Customer</Text>
<Text style={styles.text}>{customerName || 'Customer Name'}</Text>

<Text style={styles.sectionTitle}>Vehicle</Text>
<Text style={styles.text}>{carModel || 'Vehicle Model'}</Text>

<Text style={styles.sectionTitle}>Service Status</Text>

<View style={styles.statusBox}>
<Text style={styles.statusText}>All Services Confirmed</Text>
</View>

</View>


<View style={styles.card}>

<Text style={styles.sectionTitle}>Selected Services</Text>

{selectedServices.map((service, index) => (
  <View key={index} style={styles.serviceRow}>
    <Text style={styles.serviceText}>{service}</Text>
    <Text style={styles.check}>✓</Text>
  </View>
))}

</View>


<View style={styles.card}>

<Text style={styles.sectionTitle}>Delivery Information</Text>

<Text style={styles.text}>Estimated Arrival</Text>
<Text style={styles.highlight}>Today - 6:30 PM</Text>

<Text style={styles.text}>Total Cost</Text>
<Text style={styles.price}>${total || 0}</Text>

</View>


<TouchableOpacity style={styles.trackButton} onPress={handleTrackVehicle}>
<Text style={styles.trackText}>Track Vehicle</Text>
</TouchableOpacity>

</ScrollView>

);
};

export default ConfirmedServiceScreen;


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f2f4f8",
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
borderRadius:12,
padding:18,
marginBottom:15,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:6,
elevation:3
},

sectionTitle:{
fontSize:18,
fontWeight:"600",
marginBottom:6,
marginTop:8
},

text:{
fontSize:16,
color:"#555"
},

highlight:{
fontSize:18,
fontWeight:"bold",
color:"#2e86de",
marginBottom:8
},

serviceRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingVertical:8,
borderBottomWidth:0.5,
borderColor:"#ddd"
},

serviceText:{
fontSize:16
},

check:{
fontSize:18,
color:"green",
fontWeight:"bold"
},

statusBox:{
backgroundColor:"#e8f7ee",
padding:10,
borderRadius:8,
marginTop:5
},

statusText:{
color:"green",
fontWeight:"bold"
},

price:{
fontSize:24,
fontWeight:"bold",
color:"#2e86de",
marginTop:5
},

trackButton:{
backgroundColor:"#2e86de",
padding:15,
borderRadius:10,
marginTop:10
},

trackText:{
color:"#fff",
textAlign:"center",
fontSize:16,
fontWeight:"bold"
}

});