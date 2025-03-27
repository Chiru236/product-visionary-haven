
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { type Product } from '../utils/data';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="heading-lg">Products</h2>
        <div className="flex space-x-2">
          <span className="text-sm text-zinc-500">View:</span>
          <span className="text-sm font-medium">All</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={handleProductClick}
          />
        ))}
      </div>
      
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default ProductGrid;
