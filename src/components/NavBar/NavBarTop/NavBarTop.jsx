import { Link } from 'react-router-dom'
import CartWidget from '../../CartWidget/CartWidget'


const NavBarTop = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ margin: "0px" }}>Koren Store</h1>
            <div>
                <input type="text" placeholder="Search.."></input>
                <button>Search</button>
            </div>
            <ul style={{ listStyleType: "none", padding: "0px", margin: "10px", display: "flex" }}>
                <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
                <li style={{ marginRight: "10px" }}><a href="#">About us</a></li>
                <li style={{ marginRight: "10px" }}><a href="#">Contact</a></li>
            </ul>
            <CartWidget />
        </div >
    )
}

export default NavBarTop