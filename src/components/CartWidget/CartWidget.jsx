import { useContext } from "react"
import cartImg from "./cart.svg"
import { CartContext } from "../../App"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <div>
                {cart.length}
                <Link to='/cart' ><img src={cartImg} alt="cart" style={{ height: "35px" }} /></Link>
            </div>
        </>
    )
}

export default CartWidget