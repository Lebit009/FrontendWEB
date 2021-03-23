import React,{ Component , state, Registration} from "react";
import axios from 'axios';
import swal from 'sweetalert';
import {Container,Row,Col} from 'react-bootstrap';

class Login extends Component{
    state = {
        us : "",
        pwd : ""
    }
    Registration=(e)=>{
        e.preventDefault();
        const newdata = {
            us: this.state.us,
            pwd: this.state.pwd
        }
        console.log(newdata);
        swal({
            title: "Login",
            text: "You're logged In !!",
            icon: "success",
            button: "Ok!",
          });
        axios.post("http://localhost:90/registration/login", newdata)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <React.Fragment>
                 <Container fluid>
                    <Row>
                        <Col lg={12} md={6} sm={12}>
                        <div className="container__login">
                        <form className="login">
                            <h3>Log In</h3>
                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" value ={this.state.un}
                                onChange={(event)=>{this.setState({us : event.target.value})}}/>
                            </div>
                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Password" value ={this.state.pwd} 
                                onChange={(event)=>{this.setState({pwd : event.target.value})}}/>
                            </div>
                            <button type="submit" className="ButtonUI" onClick = {this.Registration}>Log In</button>
                        </form>
                        </div>
                        </Col>
                    </Row>
            </Container>
          
            </React.Fragment>
           
           
        )
    }
}
export default Login;