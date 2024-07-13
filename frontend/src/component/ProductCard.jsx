
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-gray-700 text-base">
          Price: ${product.price} | Rating: {product.rating} | Discount: {product.discount}%
        </p>
        <p className="text-gray-700 text-base">
          Availability: {product.availability === 'yes' ? 'Available' : 'Out of stock'}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
