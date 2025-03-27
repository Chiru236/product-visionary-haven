
import React from 'react';
import { type Product } from '../utils/data';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-xl animate-scale-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="aspect-square w-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="heading-md mb-2">{product.name}</h2>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex items-center mt-2 mb-4">
              <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
              <span className="mx-2 text-zinc-300">•</span>
              <span className="text-sm text-zinc-500">{product.category}</span>
            </div>
            
            <p className="text-zinc-600 mb-6">{product.description}</p>
            
            <div className="border-t border-zinc-100 pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-zinc-500">Inventory Status</span>
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
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-500">Quantity Available</span>
                <span className="text-sm font-medium">{product.stock}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
