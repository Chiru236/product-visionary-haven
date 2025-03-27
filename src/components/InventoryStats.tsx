
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getStockDistribution, getCategoryDistribution } from '../utils/data';

interface StatsCardProps {
  title: string;
  value: number | string;
  label?: string;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, label, color = 'bg-white' }) => {
  return (
    <div className={`glass-panel p-5 rounded-xl animate-slide-in`}>
      <h3 className="text-sm font-medium text-zinc-500 mb-1">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        {label && <span className="text-xs text-zinc-400 ml-1">{label}</span>}
      </div>
    </div>
  );
};

interface InventoryStatsProps {
  stats: {
    totalProducts: number;
    totalStock: number;
    lowStockItems: number;
    outOfStockItems: number;
  };
}

const COLORS = ['#4ade80', '#facc15', '#f87171'];

const InventoryStats: React.FC<InventoryStatsProps> = ({ stats }) => {
  const stockData = getStockDistribution();
  const categoryData = getCategoryDistribution();

  return (
    <div className="mb-12">
      <h2 className="heading-lg mb-6">Inventory Overview</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard title="Total Products" value={stats.totalProducts} />
        <StatsCard title="Total Stock" value={stats.totalStock} label="units" />
        <StatsCard title="Low Stock Items" value={stats.lowStockItems} />
        <StatsCard title="Out of Stock" value={stats.outOfStockItems} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-4">Stock Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stockData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {stockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} products`, 'Quantity']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-4">Category Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(value) => [`${value} products`, 'Quantity']} />
                <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStats;
