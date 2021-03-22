import React,{ Component , state, Registration} from "react";
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';

class Register extends Component{
    state = {
        fn : "",
        ln : "",
        mail : "",
        pn : "",
        us : "",
        pwd : "",
        Usertype : ""
    }
    Registration=(e)=>{
        e.preventDefault();
        const newdata = {
            fn: this.state.fn,
            ln: this.state.ln,
            mail: this.state.mail,
            us: this.state.us,
            pwd: this.state.pwd,
            pn: this.state.pn,
            Usertype: this.state.Usertype
        }
        axios.post("http://localhost:90/registration/insert", newdata)
        .then()
        .catch()
    }
    render(){
        return(
            <React.Fragment>
                 <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12} class="Reg">
                         <div className="reg_container">  
                        <form className="Reg">
                            <h3>Sign Up</h3>
                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="first name" value ={this.state.fn}
                                onChange={(event)=>{this.setState({fn : event.target.value})}}/>
                            </div>
                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last name" value ={this.state.ln} 
                                onChange={(event)=>{this.setState({ln : event.target.value})}}/>
                            </div>
                    
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter email" value ={this.state.mail} 
                                onChange={(event)=>{this.setState({mail : event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="username" value ={this.state.us} 
                                onChange={(event)=>{this.setState({us : event.target.value})}}/>
                            </div>
                    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="password" value ={this.state.pwd} 
                                onChange={(event)=>{this.setState({pwd : event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" placeholder="Phone number" value ={this.state.pn}
                                onChange={(event)=>{this.setState({pn : event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="user type" value ={this.state.Usertype} 
                                onChange={(event)=>{this.setState({Usertype : event.target.value})}}/>
                            </div>
                            <button type="submit" className="ButtonUI" onClick = {this.Registration}>Sign Up</button>
                            <p className="forgot-password text-right">
                            Already registered <a href="/login">sign in?</a>
                            </p>
                        </form>
                        </div> 
                    </Col>
                    </Row>
                </Container>   
            </React.Fragment>  
        )
    }
}
export default Register;