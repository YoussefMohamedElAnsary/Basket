import React, { createContext, useContext, useEffect, useState } from 'react';
import { firestoreHelpers } from '../firebase/config';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load all products
  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await firestoreHelpers.getProducts();
      setProducts(productsData);
    } catch (err) {
      setError(err.message);
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load products by category
  const loadProductsByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await firestoreHelpers.getProductsByCategory(category);
      setProducts(productsData);
    } catch (err) {
      setError(err.message);
      console.error('Error loading products by category:', err);
    } finally {
      setLoading(false);
    }
  };

  // Search products
  const searchProducts = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await firestoreHelpers.searchProducts(searchTerm);
      setProducts(productsData);
    } catch (err) {
      setError(err.message);
      console.error('Error searching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new product
  const addProduct = async (productData) => {
    try {
      const productId = await firestoreHelpers.addProduct(productData);
      // Reload products to include the new one
      await loadProducts();
      return productId;
    } catch (err) {
      setError(err.message);
      console.error('Error adding product:', err);
      throw err;
    }
  };

  // Update a product
  const updateProduct = async (productId, updateData) => {
    try {
      await firestoreHelpers.updateProduct(productId, updateData);
      // Update the product in local state
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === productId 
            ? { ...product, ...updateData }
            : product
        )
      );
    } catch (err) {
      setError(err.message);
      console.error('Error updating product:', err);
      throw err;
    }
  };

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      await firestoreHelpers.deleteProduct(productId);
      // Remove the product from local state
      setProducts(prevProducts => 
        prevProducts.filter(product => product.id !== productId)
      );
    } catch (err) {
      setError(err.message);
      console.error('Error deleting product:', err);
      throw err;
    }
  };

  // Get a single product
  const getProduct = async (productId) => {
    try {
      return await firestoreHelpers.getProduct(productId);
    } catch (err) {
      setError(err.message);
      console.error('Error getting product:', err);
      throw err;
    }
  };

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const value = {
    products,
    loading,
    error,
    loadProducts,
    loadProductsByCategory,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}; 