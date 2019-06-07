import React, { Component } from 'react' ;

const NavBar = ({total}) => {
    
        return(
            <nav className="navbar navbar-dark bg-primary" style={{color: 'white'}} >
            My Cart {"\t"} <span  className="badge badge-light">{total}</span>
            </nav>

        );
    
}

export default NavBar;