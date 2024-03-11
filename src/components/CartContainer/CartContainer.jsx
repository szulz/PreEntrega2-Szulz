import React, { useContext } from 'react'
import { CartContext } from '../../App'
import CartList from '../CartList/CartList'
const CartContainer = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <>
            {cart.length === 0 ?
                <>
                    <h1 >Whoops! Seems like you have not added anithing to your cart yet!</h1>
                </>
                :
                <>
                    {cart.map(cart =>
                        <CartList key={cart.id} {...cart}></CartList>
                    )}
                </>
            }
        </>
    )
}

export default CartContainer