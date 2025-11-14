import { useState, useEffect } from 'react';


export function useProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductTitles = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products');
        const productsArray = await response.json();
        
        const productTitles = productsArray.map((product) => product.title);
        setProducts(productTitles);

    };

    fetchProductTitles();

  }, []);

  return products;

}