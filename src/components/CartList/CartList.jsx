import React from 'react'

const CartList = ({ title, image, price, description, stock, categoryId, id, quantity}) => {
    return (
        <div>
            <img src={image} alt={title} />
            <li>{title}</li>
            <li>${price}</li>
            <li>{description}</li>
            <li>{categoryId}</li>
            <li>{quantity}</li>
        </div>
    )
}

export default CartList