import React from 'react';
import { FlatList, Button, StyleSheet, View, Text } from 'react-native';
import { products } from '../data/products';

const ProductList = ({ onSelectProduct }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Button
            title={item.inStock ? "Select" : "Out of Stock"}
            onPress={() => item.inStock && onSelectProduct(item)}
            disabled={!item.inStock}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  productName: {
    fontSize: 16,
  },
});

export default ProductList;
