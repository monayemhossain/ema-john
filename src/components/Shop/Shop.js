import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

         // add to cart handler
         const handleAddToCart = (product) => {
             const newCart = [...cart, product];
             setCart(newCart)
        }
 
    return (
        <div className="shop-container">
            <div className="product-container">
               
                {
                    products.map(product => <Product
                        product={product}
                        handleAddToCart={ handleAddToCart}
                        key={product.key}    
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;