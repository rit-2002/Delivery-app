// data/products.js
export const products = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    inStock: Math.random() < 0.8,
  }));
  