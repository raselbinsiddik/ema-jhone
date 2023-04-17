import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    const handleDeleteToCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart cart={cart}
                    handleDeleteToCart={handleDeleteToCart}>
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-procced'>Procced checkout</button>
                    </Link>
                    </Cart>
            </div>
        </div>
    );
};

export default Orders;