
import React from 'react';
import { type Product } from '../utils/data';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="glass-panel overflow-hidden card-hover cursor-pointer animate-scale-in"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base mb-1 text-balance">{product.name}</h3>
          <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-xs text-zinc-500">In stock:</span>
            <span className="text-sm font-medium ml-1">{product.stock}</span>
          </div>
          {product.status === 'in-stock' && (
            <span className="status-badge-in-stock">In Stock</span>
          )}
          {product.status === 'low-stock' && (
            <span className="status-badge-low-stock">Low Stock</span>
          )}
          {product.status === 'out-of-stock' && (
            <span className="status-badge-out-of-stock">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
