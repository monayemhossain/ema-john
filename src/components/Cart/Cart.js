import React from 'react';
import "./Cart.css";


const Cart = ({ cart }) => {
   
    let totalQuantity = 0;
    let total = 0;
        
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
         total = total + product.price * product.quantity;
         totalQuantity = totalQuantity + product.quantity;
         console.log(totalQuantity)   
    }
    
    const shipping =total>0?5:0;
    const tax = total * 0.01;
    const grandTotal =total+shipping+tax
     
    return (
        <div className="cart">
            <h3>Order Summary </h3>
            <h4> Items Ordered:{totalQuantity}</h4>
            <p>Items Price: $ { total} </p>
            <p>Shipping &amp; Handling : $ { shipping} </p>
            <p>Estimated Tax : $ {tax}</p>
            <h5>Order Total : $  { grandTotal} </h5>
            <button className="btn-regular"> Review your order</button>
        </div>
    );
};

export default Cart;