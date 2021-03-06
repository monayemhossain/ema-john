import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

        // sideEffect localstorage
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];

            for (const key in savedCart) {
            console.log(key,savedCart[key])
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
           
            }
            setCart(storedCart)
        }
    },[products])

         // add to cart handler
         const handleAddToCart = (product) => {
             const newCart = [...cart, product];
             setCart(newCart);
            //  from localstorage
             addToDb(product.key)
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