import React from 'react'
import logo from '../../assest/logo.png'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                   <img src={logo} alt="" width="60" height="50"/>
                </a>
                <a className="navbar-brand" style={{marginRight:"90vw"}} href="#">Company Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Header
