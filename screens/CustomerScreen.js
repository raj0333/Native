import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
FlatList,
Alert,
Modal,
ScrollView,
TextInput
} from "react-native";

const orders = [
{ id: "1", title: "Order #1234", status: "In Transit" },
{ id: "2", title: "Order #5678", status: "Delivered" },
{ id: "3", title: "Order #9012", status: "Pending" },
{ id: "4", title: "Order #3456", status: "In Transit" },
{ id: "5", title: "Order #7890", status: "Delivered" },
];

const CustomerScreen = ({ navigation }) => {
const [searchText, setSearchText] = useState("");
const [selectedStatus, setSelectedStatus] = useState("All");
const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

const statuses = ["All", "Pending", "In Transit", "Delivered", "Confirmed"];

const filteredOrders = orders.filter(order => {
const matchesSearch = order.title.toLowerCase().includes(searchText.toLowerCase());
const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;
return matchesSearch && matchesStatus;
});
const handleLogout = () => {
Alert.alert(
"Logout",
"Are you sure you want to logout?",
[
{ text: "Cancel", style: "cancel" },
{ text: "Logout", onPress: () => navigation.replace("Login") }
]
);
};

const handleTrackOrder = () => {
navigation.navigate("TrackOrder");
};

return (
<View style={styles.container}>

<Image
source={{
uri: "https://img.freepik.com/free-vector/businessman-avatar-cartoon-character-profile_24877-18271.jpg"
}}
style={styles.banner}
/>

<Text style={styles.title}>Welcome Customer 👋</Text>

{/* Filter Tabs */}
<View style={styles.filterTabsContainer}>
{statuses.map(status => (
<TouchableOpacity
key={status}
style={[
styles.filterTab,
selectedStatus === status && styles.filterTabActive
]}
onPress={() => setSelectedStatus(status)}
>
<Text
style={[
styles.filterTabText,
selectedStatus === status && styles.filterTabTextActive
]}
>
{status}
</Text>
</TouchableOpacity>
))}
</View>

{/* Search Bar */}
<View style={styles.searchContainer}>
<TextInput
style={styles.searchInput}
placeholder="Search orders..."
value={searchText}
onChangeText={setSearchText}
/>
</View>

{/* Action Buttons */}
<View style={styles.row}>
<TouchableOpacity style={styles.card} onPress={handleTrackOrder}>
<Text style={styles.cardText}>📦 Track Order</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.card} onPress={() => navigation.navigate("NewShipment")}>
<Text style={styles.cardText}>➕ New Shipment</Text>
</TouchableOpacity>
</View>

{/* Order List */}
<View style={styles.orderListHeader}>
  <Text style={styles.subTitle}>Recent Orders</Text>
<TouchableOpacity style={styles.addServiceBtn} onPress={() => navigation.navigate("Service")}>
    <Text style={styles.addServiceText}>➕ Add Service</Text>
  </TouchableOpacity>
</View>

<FlatList
data={filteredOrders}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.orderCard}>
<View style={styles.orderContent}>
<Text style={styles.orderTitle}>{item.title}</Text>
<Text style={styles.status}>{item.status}</Text>
</View>
{item.status === "Delivered" && (
<View style={styles.iconContainer}>
<Image
source={require('../assets/tire.png')}
style={styles.demoVehicleIcon}
/>
</View>
)}
</View>
)}
/>

{/* Customer Quote Button */}
<TouchableOpacity style={styles.quoteBtn} onPress={() => navigation.navigate("Quote")}>
  <Text style={styles.quoteText}>Customer Quote</Text>
</TouchableOpacity>

{/* Logout Button */}
<TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
<Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>

</View>
);
};

export default CustomerScreen;

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: "#f5f6fa",
},

banner: {
width: 150,
height: 150,
resizeMode: "cover",
borderRadius: 75,
marginBottom: 10,
alignSelf: "center",
},

title: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 10,
textAlign: "center",
},

row: {
flexDirection: "row",
justifyContent: "space-between",
marginVertical: 15,
},

card: {
flex: 1,
backgroundColor: "#27ae60",
padding: 15,
marginHorizontal: 5,
borderRadius: 10,
},

cardText: {
color: "#fff",
textAlign: "center",
fontWeight: "bold",
},

subTitle: {
fontSize: 18,
fontWeight: "600",
marginVertical: 10,
},

orderCard: {
backgroundColor: "#fff",
padding: 15,
borderRadius: 10,
marginBottom: 10,
elevation: 3,
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
},

orderContent: {
flex: 1,
},

orderTitle: {
fontWeight: "bold",
},

status: {
color: "#2f80ed",
marginTop: 5,
},

iconContainer: {
justifyContent: "center",
alignItems: "center",
},

demoVehicleIcon: {
width: 30,
height: 30,
},

logoutBtn: {
backgroundColor: "#e74c3c",
padding: 15,
borderRadius: 8,
marginTop: 20,
alignItems: "center",
},

logoutText: {
color: "#fff",
fontWeight: "bold",
fontSize: 16,
},

// Customer Quote Button Styles
quoteBtn: {
backgroundColor: "#27ae60", // Green color
padding: 15,
borderRadius: 8,
marginTop: 15,
alignItems: "center",
elevation: 3,
shadowColor: "#000",
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
},
quoteText: {
color: "#fff",
fontWeight: "bold",
fontSize: 16,
},


// Filter Tabs Styles
filterTabsContainer: {
flexDirection: "row",
justifyContent: "space-around",
backgroundColor: "#fff",
borderRadius: 10,
padding: 5,
marginBottom: 15,
elevation: 2,
},
filterTab: {
flex: 1,
paddingVertical: 10,
alignItems: "center",
borderRadius: 4,
marginHorizontal: 2,
},
filterTabActive: {
backgroundColor: "#27ae60",
},
filterTabText: {
fontSize: 14,
color: "#666",
fontWeight: "500",
},
filterTabTextActive: {
color: "#fff",
fontWeight: "bold",
},

// Search Bar Styles
searchContainer: {
flexDirection: "row",
alignItems: "center",
backgroundColor: "#fff",
borderRadius: 10,
paddingHorizontal: 10,
marginBottom: 15,
elevation: 2,
},
searchInput: {
flex: 1,
height: 45,
fontSize: 16,
},

// Order List Header Styles
orderListHeader: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginBottom: 10,
paddingVertical: 5,
},

// Add Service Button Styles
addServiceBtn: {
backgroundColor: "#27ae60", // Green color to match the theme
paddingVertical: 6,
paddingHorizontal: 12,
borderRadius: 20,
alignSelf: "flex-end",
elevation: 2,
shadowColor: "#000",
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.22,
shadowRadius: 2.22,
},
addServiceText: {
color: "#fff",
fontWeight: "600",
fontSize: 14,
},

});
