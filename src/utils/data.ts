
export interface Product {
  id: string;
  name: string;
  image: string;
  stock: number;
  category: string;
  price: number;
  description: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    stock: 45,
    category: 'Electronics',
    price: 199.99,
    description: 'Premium wireless headphones with noise cancellation technology and superior sound quality.',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'Ultra-thin Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    stock: 12,
    category: 'Electronics',
    price: 1299.99,
    description: 'High-performance, ultra-thin laptop with long battery life and exceptional display.',
    status: 'low-stock'
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    stock: 0,
    category: 'Wearables',
    price: 149.99,
    description: 'Advanced fitness tracking with heart rate monitoring, sleep analysis, and smartphone notifications.',
    status: 'out-of-stock'
  },
  {
    id: '4',
    name: 'Professional Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    stock: 8,
    category: 'Photography',
    price: 899.99,
    description: 'Professional-grade digital camera with advanced features and exceptional image quality.',
    status: 'low-stock'
  },
  {
    id: '5',
    name: 'Premium Coffee Maker',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
    stock: 29,
    category: 'Kitchen',
    price: 149.99,
    description: 'High-end programmable coffee maker with various brewing options and temperature control.',
    status: 'in-stock'
  },
  {
    id: '6',
    name: 'Smartphone Stand',
    image: 'https://images.unsplash.com/photo-1609064213461-35d1b8d7a544?auto=format&fit=crop&w=800&q=80',
    stock: 35,
    category: 'Accessories',
    price: 24.99,
    description: 'Adjustable smartphone stand made with premium aluminum, perfect for desk or bedside use.',
    status: 'in-stock'
  }
];

export const getInventoryStats = () => {
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
  const lowStockItems = products.filter(product => product.status === 'low-stock').length;
  const outOfStockItems = products.filter(product => product.status === 'out-of-stock').length;
  
  return {
    totalProducts,
    totalStock,
    lowStockItems,
    outOfStockItems
  };
};

export const getCategoryDistribution = () => {
  const categories: { [key: string]: number } = {};
  
  products.forEach(product => {
    if (categories[product.category]) {
      categories[product.category]++;
    } else {
      categories[product.category] = 1;
    }
  });
  
  return Object.entries(categories).map(([name, value]) => ({ name, value }));
};

export const getStockDistribution = () => {
  const inStock = products.filter(product => product.status === 'in-stock').length;
  const lowStock = products.filter(product => product.status === 'low-stock').length;
  const outOfStock = products.filter(product => product.status === 'out-of-stock').length;
  
  return [
    { name: 'In Stock', value: inStock },
    { name: 'Low Stock', value: lowStock },
    { name: 'Out of Stock', value: outOfStock },
  ];
};
