import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert,
Image
} from "react-native";

const SignupScreen = ({ navigation }) => {

const [role,setRole] = useState("customer");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

// const handleSignup = () => {

// if(name.trim()==="" || email.trim()==="" || password.trim()===""){
// Alert.alert("Validation","Please fill all fields");
// return;
// }

// Alert.alert("Success",`Account created as ${role}`);
// navigation.navigate("Login");
// };


const handleSignup = async () => {

if(name.trim()==="" || email.trim()==="" || password.trim()===""){
Alert.alert("Validation","Please fill all fields");
return;
}

try {

const newUser = {
name,
email,
password,
role
};

// purane users fetch karo
const existingUsers = await AsyncStorage.getItem("users");

// agar data hai to parse karo, warna empty array
let users = existingUsers ? JSON.parse(existingUsers) : [];

// check karo email already exist na ho
const userExists = users.find(user => user.email === email);

if(userExists){
Alert.alert("Error","User already exists");
return;
}

// new user add karo
users.push(newUser);

// save back to storage
await AsyncStorage.setItem("users", JSON.stringify(users));

Alert.alert("Success",`Account created as ${role}`);

// clear fields
setName("");
setEmail("");
setPassword("");

// login screen pe bhejo
navigation.navigate("Login");

} catch (error) {
Alert.alert("Error","Something went wrong");
}
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
<Text style={styles.title}>Create Account</Text>

{/* Role Selection */}
<View style={styles.roleContainer}>

<TouchableOpacity
style={[
styles.roleButton,
role==="customer" && styles.activeRole
]}
onPress={()=>setRole("customer")}
>
<Text style={[styles.roleText, role==="customer" && styles.activeRoleText]}>
Customer
</Text>
</TouchableOpacity>

<TouchableOpacity
style={[
styles.roleButton,
role==="driver" && styles.activeRole
]}
onPress={()=>setRole("driver")}
>
<Text style={[styles.roleText, role==="driver" && styles.activeRoleText]}>
Driver
</Text>
</TouchableOpacity>

</View>

{/* Name */}
<TextInput
placeholder="Enter Name"
style={styles.input}
value={name}
onChangeText={setName}
/>

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

{/* Signup Button */}
<TouchableOpacity
style={styles.signupBtn}
onPress={handleSignup}
>
<Text style={styles.signupTextBtn}>Sign Up</Text>
</TouchableOpacity>

{/* Back to Login */}
<TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={styles.loginLink}>
Already have account? Login
</Text>
</TouchableOpacity>

</View>

);
};

export default SignupScreen;

const styles = StyleSheet.create({

container:{
flex:1,
padding:25,
backgroundColor:"#f5f6fa",
justifyContent:"center"
},

image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
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
backgroundColor:"#2f80ed",
borderColor:"#2f80ed",
},

roleText:{
color:"#333",
fontWeight:"600"
},

activeRoleText:{
color:"#fff"
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:8,
marginBottom:15,
backgroundColor:"#fff"
},

signupBtn:{
backgroundColor:"#2f80ed",
padding:15,
borderRadius:8,
marginBottom:15
},

signupTextBtn:{
color:"#fff",
textAlign:"center",
fontWeight:"bold",
fontSize:16
},

loginLink:{
textAlign:"center",
color:"#555"
}

});