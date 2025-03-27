
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex items-center justify-between mb-8 animate-fade-in">
      <div className="flex items-center">
        <span className="text-xl font-semibold">InventoryPro</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-zinc-500">Dashboard</span>
        <span className="text-sm text-zinc-500">Products</span>
        <span className="text-sm text-zinc-500">Reports</span>
        <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
