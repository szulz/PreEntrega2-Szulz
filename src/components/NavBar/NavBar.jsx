import NavBarTop from "./NavBarTop/NavBarTop"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <NavBarTop />
            <ul style={{ listStyleType: "none", padding: "0px", margin: "10px", display: "flex" }}>
            

                <li style={{ marginRight: "10px" }}><a className="btn btn-primary" href="#" role="button">Sports</a> </li>
                <li style={{ marginRight: "10px" }}><a className="btn btn-primary" href="#" role="button">Health</a> </li>
                <li style={{ marginRight: "10px" }}><a className="btn btn-primary" href="#" role="button">Technology</a> </li>
                <li style={{ marginRight: "10px" }}><a className="btn btn-primary" href="#" role="button">Food</a> </li>
            </ul>
        </>
    )
}

export default NavBar

