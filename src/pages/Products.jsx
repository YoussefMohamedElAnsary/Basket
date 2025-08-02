import React from 'react';
import ProductList from '../components/ProductList';
import AdminPanel from '../components/AdminPanel';
import { useAuth } from '../contexts/AuthContext';

const Products = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        
        {/* Admin Panel - Only show if user is logged in */}
        {currentUser && (
          <div className="mb-8">
            <AdminPanel />
          </div>
        )}
        
        {/* Product List */}
        <ProductList />
      </div>
    </div>
  );
};

export default Products; 