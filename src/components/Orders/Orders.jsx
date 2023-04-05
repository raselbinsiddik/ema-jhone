import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    
    return (
        <div className='shop-container'>
            <div className='revew-container'>
                {
                    cart.map(product => <RevewItem key={product.id} product={product}
                    handleRemoveFromCart={handleRemoveFromCart}></RevewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;