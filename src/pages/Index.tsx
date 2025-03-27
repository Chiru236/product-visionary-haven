
import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import InventoryStats from '../components/InventoryStats';
import { products, getInventoryStats } from '../utils/data';

const Index: React.FC = () => {
  const stats = getInventoryStats();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Navbar />
        
        <main className="py-6">
          <header className="mb-10 animate-fade-in">
            <h1 className="heading-xl mb-2">Inventory Management</h1>
            <p className="text-zinc-500">Track, manage, and analyze your product inventory</p>
          </header>
          
          <InventoryStats stats={stats} />
          
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
};

export default Index;
