import { Component } from "react";
import { Container, Col} from "react-bootstrap";
import { Route } from "react-router-dom";
import Register from './Register';
import Update from '../Update/Update'
import Login from './Login';
import Home from './home';
import Shop from '../Shop/Shop';
import AddProduct from './AddProduct';
import Aboutus from './About_us';

class Body extends Component{
    render(){
        return(
           <Container fluid>
                <Col><Route path='/home' exact component={Home}></Route></Col>
                <Col><Route path='/' exact component={Home}></Route></Col>
                <Col><Route path='/shop' component={Shop}></Route></Col>
                <Col><Route path='/register' component={Register} /></Col>
                <Col><Route path='/login' component={Login} /></Col>
                <Col><Route path='/update/:id' component={Update} /></Col>
                <Col><Route path='/AddProduct' component={AddProduct} /></Col>
                <Col><Route path='/About_us' component={Aboutus} /></Col>
           </Container>
        )
    }
}
export default Body;