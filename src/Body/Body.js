import { Component } from "react";
import { Container, Col} from "react-bootstrap";
import { Route } from "react-router-dom";
import Register from './Register';
import Update from '../Update/Update'
import Login from './Login';
import Home from './home';
import Shop from '../Shop/Shop';

class Body extends Component{
    render(){
        return(
           <Container fluid>
                <Col><Route path='/home' exact component={Home}></Route></Col>
                <Col><Route path='/' exact component={Home}></Route></Col>
                <Col><Route path='/shop' component={Shop}></Route></Col>
                <Col><Route path='/register' component={Register} /></Col>
                <Col><Route path='/login' component={Login} /></Col>
                <Col><Route path='/update' component={Update} /></Col>
           </Container>
        )
    }
}
export default Body;