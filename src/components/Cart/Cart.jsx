import React from 'react';
import './Cart.css'

const Cart = ({cart, removeHandleFromCart}) => {
    return (
        <div className='cart'>
            <h2>Order Summary :{cart.length}</h2>
            {
                cart.length === 0 && <h4>Add your favourite product</h4>
            }
            {
                cart.map(singleCart => <p
                key={singleCart._id}
                >{singleCart.name} <button onClick={() => removeHandleFromCart(singleCart._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;