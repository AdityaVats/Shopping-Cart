import React, { Component } from 'react' ;

const NavBar = (props) => {
    
        return(
            <nav className="navbar navbar-dark bg-primary" style={{color: 'white'}} >
            My Cart {"\t"} <span  className="badge badge-light">{props.total}</span>
            <button onClick={props.toggleHandler} className="btn btn-warning" >Toggle</button>
            </nav>

        );
    }

export default NavBar;