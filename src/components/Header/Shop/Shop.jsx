import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(()=> {
        const storedCart = getShoppingCart();
        
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
             
                saveCart.push(addedProduct);
               

            }
        }
        setCart(saveCart);
        
    }, [products])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        
        setCart(newCart);
        addToDb(product.id);
    }
    const handleDeleteToCart = () => {
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleDeleteToCart={handleDeleteToCart}>
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-procced'>Reveiw order</button>
                    </Link>
                    </Cart>
            </div>   
        </div>
    );
};

export default Shop;