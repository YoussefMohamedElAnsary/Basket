import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser, getUserCart, updateUserCart } = useAuth();

  // Load user's cart from Firestore when user changes
  useEffect(() => {
    const loadUserCart = async () => {
      if (currentUser) {
        setLoading(true);
        try {
          const userCart = await getUserCart(currentUser.uid);
          setCart(userCart);
        } catch (error) {
          console.error('Error loading user cart:', error);
        }
        setLoading(false);
      } else {
        setCart([]);
      }
    };

    loadUserCart();
  }, [currentUser, getUserCart]);

  // Add item to cart
  const addToCart = async (item) => {
    if (!currentUser) {
      alert('Please sign in to add items to cart');
      return;
    }

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex > -1) {
      // Item already exists, increase quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      await updateUserCart(currentUser.uid, updatedCart);
    } else {
      // Add new item
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
      await updateUserCart(currentUser.uid, newCart);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    if (!currentUser) return;

    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    await updateUserCart(currentUser.uid, updatedCart);
  };

  // Update item quantity
  const updateQuantity = async (itemId, quantity) => {
    if (!currentUser) return;

    if (quantity <= 0) {
      await removeFromCart(itemId);
      return;
    }

    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    await updateUserCart(currentUser.uid, updatedCart);
  };

  // Clear cart
  const clearCart = async () => {
    if (!currentUser) return;

    setCart([]);
    await updateUserCart(currentUser.uid, []);
  };

  // Calculate total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get cart item quantity by product ID
  const getCartItemQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const value = {
    cart,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getCartItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 