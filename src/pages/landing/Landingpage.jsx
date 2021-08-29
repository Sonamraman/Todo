import React from 'react'
import './landing.css'

const Landingpage = () => {
    
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" fill="currentColor" className="bi bi-shop shopicon" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                </svg>
                <a className="navbar-brand ms-2" href="#">Shoping Tour</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                        <li className="nav-item">
                            <a className="nav-link active links" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active links" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active links" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active links" href="#">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active links" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> 
        <main className="px-3 text-center">
          <h1 style={{marginTop:"7rem" }}>Welcome!</h1>
          <h5 className=" text-wrap mx-auto" style={{width:"30rem",marginTop:"5rem" }} >An exciting place for the whole family to shop. A fresh approach to shopping.</h5>
          <a href="#" style={{marginTop:"5rem"}} className="btn btn-lg btn-secondary fw-bold border-dark bg-dark getbtn">Get Started</a>
        </main>
    </>
    )
}

export default Landingpage
