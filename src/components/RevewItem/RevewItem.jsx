import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './RevewItem.css'

const RevewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='revew-item'>
            <img src={img} alt="" />
            <div className='revew-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'> ${price}</span></p>
                <p>Order quantity: <span className='orange-text'> ${quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/></button>
        </div>
    );
};

export default RevewItem;