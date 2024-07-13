
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
       
        const response = await fetch(`http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q`); //fetching problem for your side so i am not able to provide the screen shot
        if (response.ok) {
          const data = await response.json();
          setProduct(data.product); 
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8 h-screen">{product.productName}</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            Price: ${product.price} | Rating: {product.rating} | Discount: {product.discount}%
          </p>
          <p className="text-gray-700 text-base">
            Availability: {product.availability === 'yes' ? 'Available' : 'Out of stock'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
