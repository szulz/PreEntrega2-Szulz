import { useContext } from "react"
import cartImg from "./cart.svg"
import { CartContext } from "../../App"


const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (    
        <>
            <div>
                {cart.length}
                <img src={cartImg} alt="cart" style={{ height: "25px" }} />

            </div>
        </>
    )
}

export default CartWidget