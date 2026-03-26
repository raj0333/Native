import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Image,
Alert
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {

const [role,setRole] = useState("customer");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

// const handleLogin = () => {

// if(email.trim() === "" || password.trim() === ""){
// Alert.alert("Validation","Please enter email and password");
// return;
// }

// Alert.alert("Success",`Logged in as ${role}`);
// };

const handleLogin = async () => {
if (email === "" || password === "") {
Alert.alert("Validation", "Please enter email and password");
return;
}

try {
// Fetch registered users
const existingUsers = await AsyncStorage.getItem("users");
const users = existingUsers ? JSON.parse(existingUsers) : [];

// Check if user exists with matching email, password, and role
const user = users.find(u => u.email === email && u.password === password && u.role === role);

if (!user) {
Alert.alert("Error", "Invalid credentials or user not registered for this role");
return;
}

// Successful login
if (role === "customer") {
navigation.navigate("CustomerScreen");
} else {
navigation.navigate("Driver");
}
} catch (error) {
Alert.alert("Error", "Something went wrong during login");
}
};

const handleSignup = () => {
navigation.navigate("Signup");
};

const handleGoogleLogin = () =>{
Alert.alert("Google Login","Google Sign In clicked");
};

return (

<View style={styles.container}>

{/* Logistics Image */}

<Image
source={{
uri:"https://img.freepik.com/free-vector/delivery-service-with-truck-concept-illustration_114360-2307.jpg"
}}
style={styles.image}
/>

<Text style={styles.title}>Car Hauling Login</Text>

{/* Role Selection */}

<View style={styles.roleContainer}>

<TouchableOpacity
style={[
styles.roleButton,
role==="customer" && styles.activeRole
]}
onPress={()=>setRole("customer")}
>

<Text style={[styles.roleText, role === "customer" && styles.activeRoleText]}>Customer</Text>

</TouchableOpacity>

<TouchableOpacity
style={[
styles.roleButton,
role==="driver" && styles.activeRole
]}
onPress={()=>setRole("driver")}
>

<Text style={[styles.roleText, role === "driver" && styles.activeRoleText]}>Driver</Text>

</TouchableOpacity>

</View>

{/* Email */}

<TextInput
placeholder="Enter Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

{/* Password */}

<TextInput
placeholder="Enter Password"
secureTextEntry
style={styles.input}
value={password}
onChangeText={setPassword}
/>

{/* Login Button */}

<TouchableOpacity
style={styles.loginBtn}
onPress={handleLogin}
>

<Text style={styles.loginText}>Login</Text>

</TouchableOpacity>

{/* Google Sign In */}

<TouchableOpacity
style={styles.googleBtn}
onPress={handleGoogleLogin}
>

<Text style={styles.googleText}>Sign in with Google</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
<Text style={styles.signupButtonText}>Don't have an account? Sign Up</Text>
</TouchableOpacity>

</View>

);

};

export default LoginScreen;

const styles = StyleSheet.create({

container:{
flex:1,
padding:25,
backgroundColor:"#f5f6fa",
justifyContent:"center"
},

image:{
width:"100%",
height:180,
resizeMode:"contain",
marginBottom:20
},

title:{
fontSize:28,
fontWeight:"bold",
textAlign:"center",
marginBottom:20
},

roleContainer:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

roleButton:{
flex:1,
padding:12,
borderWidth:1,
borderColor:"#ccc",
borderRadius:8,
marginHorizontal:5,
alignItems:"center",

},

activeRole:{
backgroundColor:"#27ae60",
borderColor:"#27ae60",

},

roleText:{
color:"#333",
fontWeight:"600"
},
activeRoleText:{
color:"#fff",
fontWeight:"600"
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:8,
marginBottom:15,
backgroundColor:"#fff"
},

loginBtn:{
backgroundColor:"#27ae60",
padding:15,
borderRadius:8,
marginBottom:15
},

loginText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold",
fontSize:16
},

googleBtn:{
backgroundColor:"#db4437",
padding:15,
borderRadius:8
},

googleText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
},

signupButton: {
  alignItems: 'center',
  marginTop: 20,
},
signupButtonText: {
  color: '#555',
  textAlign: 'center',
  fontSize: 16,
}

});