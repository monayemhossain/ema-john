import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="product">
            <div>
                <img src={ img} alt="" />
            </div>
            <div>
                <h4 className="productName">{name}</h4>
                <p> By: { seller}</p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>handleAddToCart(props.product)} className="btn-regular"> add to cart</button>
            </div>
        </div>
    );
};

export default Product;