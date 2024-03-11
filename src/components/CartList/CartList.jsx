import React from 'react'
import './CartList.css'

const CartList = ({ title, image, price, description, stock, categoryId, id, quantity }) => {
    return (
        <div className='container'>
            <div className='image'>
                <img src={image} alt={title} />
            </div>
            <div className='text'>
                <p> {title}</p>
                <p>${price} MOSTRAR EL TOTAL! </p>
                <p>{description}</p>
                <button type="button" className="btn btn-outline-danger" >-</button> <h2></h2>x{quantity}
            </div>
        </div>
    )
}

export default CartList