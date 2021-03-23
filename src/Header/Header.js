import { Component } from "react";
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component{
    render(){
        return(
            <div ClassName="cnav" >   
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top">
                <Navbar.Brand><Link to="/home" class="logo">Automotive</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/shop">Shop</Link></Nav.Link>
                    <Nav.Link><Link to="/AddProduct">Add Product</Link></Nav.Link> 
                    <Nav.Link>About Us</Nav.Link>
                    </Nav>

                    <Nav className="mr-auto">
                    <Nav.Link><Link to="/Login">Login</Link></Nav.Link>   
                    <Nav.Link><Link to="/register">Register</Link></Nav.Link> 
                    <Nav.Link><Link to="/logout">
                    <img src="./1.png" className="logoutpng"/>
                    </Link></Nav.Link>     
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
               
            </div>
            </div>
        )
    }
}
export default Header;