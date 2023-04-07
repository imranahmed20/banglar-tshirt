import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3 className={cart.length == 3 ? "red" : "green"}>Order Summary : {cart.length}</h3>
            {
                cart.length === 2 ? <p>imran</p> : <p>Emon</p>
            }
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)} className='btn-buy'>X</button>
                </p>)
            }

        </div>
    );
};

export default Cart;