import { useState, useEffect } from 'react';


export function useProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products');
        const productsArray = await response.json();
        
        const productData = productsArray.map((product) => ({
          title: product.title,
          image: product.image,
          price: parseFloat(product.price),
        }));
        setProducts(productData);

    };

    fetchProducts();

  }, []);

  return products;

}