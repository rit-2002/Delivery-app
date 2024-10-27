import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';
import CountdownTimer from './components/CountdownTimer';
import { estimateDeliveryDate } from './components/DeliveryEstimator';

const App = () => {
  const [pincode, setPincode] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryEstimate, setDeliveryEstimate] = useState('');

  const handleDeliveryEstimate = () => {
    if (!pincode || !selectedProduct) {
      alert('Please enter a pincode and select a product');
      return;
    }
    const orderTime = new Date();
    const estimate = estimateDeliveryDate(pincode, selectedProduct, orderTime);
    setDeliveryEstimate(estimate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Selection</Text>
      <ProductList onSelectProduct={setSelectedProduct} />

      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        keyboardType="numeric"
        value={pincode}
        onChangeText={setPincode}
      />
      <Button title="Estimate Delivery" onPress={handleDeliveryEstimate} />

      {deliveryEstimate ? (
        <Text style={styles.estimate}>{deliveryEstimate}</Text>
      ) : null}

      {selectedProduct && (
        <CountdownTimer
          cutoffHour={selectedProduct.provider === 'Provider A' ? 17 : 9}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
  estimate: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
});

export default App;
