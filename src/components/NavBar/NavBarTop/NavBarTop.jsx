import { Link } from 'react-router-dom'
import CartWidget from '../../CartWidget/CartWidget'


const NavBarTop = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to={'/'} style={{ margin: "0px", color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}><h1 >Koren Store</h1></Link>
            <div>
                <input type="text" placeholder="Search.."></input>
                <button>Search</button>
            </div>
            <ul style={{ listStyleType: "none", padding: "0px", margin: "10px", display: "flex" }}>
                <li style={{ marginRight: "10px" }}><Link to={'/'}>Home</Link></li>
                <Link to={'/'}></Link>
                <li style={{ marginRight: "10px" }}><a href="#">About us</a></li>
                <li style={{ marginRight: "10px" }}><a href="#">Contact</a></li>
            </ul>
            <CartWidget />
        </div >
    )
}


export default NavBarTop