import { useEffect, useState } from "react"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ title, image, price, description, stock, categoryId, id }) => {
    const [quantity, setQuantity] = useState(0)
    const [stockquantity, setStockquantity] = useState(stock)
    const add = () => {
        if (quantity < stockquantity) {
            setQuantity(quantity => quantity + 1)
        }
    }

    const subtract = () => {
        if (quantity > 0) {
            setQuantity(quantity => quantity - 1)
        }
    }

    const addToCart = () => {
        if (quantity === 0) {
            return alert('you have not added any product')
        }
        setStockquantity(stockquantity => stockquantity - quantity)
        setQuantity(quantity => quantity = 0)
        return
    }

    return (
        <>
            <div className="Productos" >
                <img src={image} alt={title} />
                <h3 style={{ textAlign: 'center' }}> {title}</h3>
                <p >{price}$</p>
                <div>
                    <button type="button" className="btn btn-outline-primary" onClick={() => add()}>+</button>
                    <button type="button" className="btn btn-outline-success" onClick={() => addToCart()}>Add to cart: {quantity}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => subtract()}>-</button>
                </div>
                <p style={{ marginBottom: '0px' }}>Stock: {stockquantity}</p>
                <Link to={`/detail/${id}`} className="btn btn-secondary btn-sm">See details</Link>

            </div >
        </>
    )
}

export default Item