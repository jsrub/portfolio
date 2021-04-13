import React,{useState} from 'react'

function Navbar() {
    return (
        <>
            <nav className = "navbar">
                <div className="navbar-container">
                    <Link to="/" classname="navbar-logo">
                        <i className="fab fa-type3"></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
