import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const reportData = [
  {
    id: '1',
    location: 'Bhopal',
    status: 'Delivered',
    amount: '₹1200',
    date: '25 Mar 2026',
  },
  {
    id: '2',
    location: 'Indore',
    status: 'Pending',
    amount: '₹0',
    date: '25 Mar 2026',
  },
  {
    id: '3',
    location: 'Ujjain',
    status: 'Delivered',
    amount: '₹800',
    date: '24 Mar 2026',
  },
];

const DriverReportScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Delivery Reports</Text>
      </View>

      {/* Summary Cards */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deliveries</Text>
          <Text style={styles.cardValue}>25</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collections</Text>
          <Text style={styles.cardValue}>₹15,000</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Completed</Text>
          <Text style={styles.cardValue}>20</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pending</Text>
          <Text style={styles.cardValue}>5</Text>
        </View>
      </View>

      {/* Recent Reports */}
      <Text style={styles.subHeader}>Recent Activity</Text>

      <FlatList
        data={reportData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={[
                  styles.status,
                  item.status === 'Delivered'
                    ? styles.delivered
                    : styles.pending,
                ]}
              >
                {item.status}
              </Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
};

export default DriverReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 20,
  },
  backButton: {
    marginRight: 15,
    width: 40,
    height: 40,
    justifyContent: 'start',
    alignItems: 'start',
  },
  backButtonText: {
    fontSize: 35,
    color: '#fff',
    lineHeight: 28,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlignVertical: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 13,
    color: '#777',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  listCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
  },
  delivered: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
  amount: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
