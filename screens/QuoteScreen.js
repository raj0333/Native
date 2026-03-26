import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const QuoteScreen = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("express");

  const expressCost = 20;
  const ecoCost = 12;

  const submitQuote = () => {
    if (!name || !product || !price) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const shippingCost = shipping === "express" ? expressCost : ecoCost;

    Alert.alert(
      "Quote Created",
      `Customer: ${name}\nProduct: ${product}\nPrice: $${price}\nShipping: ${
        shipping === "express"
          ? "Express (48h)"
          : "Eco-Shipping (7-10 days)"
      }\nShipping Cost: $${shippingCost}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Quote</Text>

      <TextInput
        placeholder="Customer Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Product Name"
        style={styles.input}
        value={product}
        onChangeText={setProduct}
      />

      <TextInput
        placeholder="Product Price"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.shippingTitle}>Shipping Option</Text>

      <TouchableOpacity
        style={[
          styles.shippingBox,
          shipping === "express" && styles.selected,
        ]}
        onPress={() => setShipping("express")}
      >
        <Text style={styles.shippingText}>Express (48h)</Text>
        <Text style={styles.shippingPrice}>$20</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.shippingBox,
          shipping === "eco" && styles.selected,
        ]}
        onPress={() => setShipping("eco")}
      >
        <Text style={styles.shippingText}>
          Eco-Shipping (7-10 days)
        </Text>
        <Text style={styles.shippingPrice}>$12 (Discount)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={submitQuote}>
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "left",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  shippingTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },

  shippingBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  selected: {
    borderColor: "#2e86de",
    backgroundColor: "#eaf3ff",
  },

  shippingText: {
    fontSize: 16,
  },

  shippingPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2e86de",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});