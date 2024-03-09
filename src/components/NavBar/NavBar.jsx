import { useEffect, useState } from "react"
import NavBarTop from "./NavBarTop/NavBarTop"
import { Link, useParams } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            < NavBarTop />
            <ul style={{ listStyleType: "none", padding: "0px", margin: "10px", display: "flex" }}>
                <Link to={'/category/sports'} className="btn btn-primary" style={{margin: '3px'}}>Sports</Link>
                <Link to={'/category/health'} className="btn btn-primary" style={{margin: '3px'}}>Health</Link>
                <Link to={'/category/technology'} className="btn btn-primary" style={{margin: '3px'}}>Technology</Link>
                <Link to={'/category/food'} className="btn btn-primary" style={{margin: '3px'}}>Food</Link>
            </ul>

        </>
    )
}

export default NavBar

