import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {CardGroup} from 'react-bootstrap';
import axios from 'axios';

class Shop extends Component{
    state = {
        products : []
    }
    componentDidMount(){
        axios.get("http://localhost:90/product/getallVehicles")
        .then((response)=>{
            console.log(response)
            this.setState({
                products : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
        
    }

    Deleteproduct(_id){
        console.log(_id)
        axios.delete("http://localhost:90/product/delete/" + _id)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <Container fluid>
                <Row>
                    
                    {
                        this.state.products.map((product)=>{
                            return (
                             
                            <Col lg={3}>
                                
                               
                        
                                    <Card className="mb-2 mt-2">
                                        <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/61%2ByDjbEBaL._AC_SX425_.jpg" />
                                        <Card.Body>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <button onClick={this.Deleteproduct.bind(this, product._id)} className="ButtonUI">Delete</button>
                                        <button type="submit" className="ButtonUI"><a href="/update"  className="h">Update</a></button>
                                        {/* <button type="submit" className="ButtonUI"><a href="/Booking"  className="h">Update</a></button> */}
                                        </Card.Footer>
                                    </Card>
                               
                                
                            </Col>
                           
                            ) 
                        })
                    }
                    
                </Row>
             </Container>
        )
    }
}
export default Shop;