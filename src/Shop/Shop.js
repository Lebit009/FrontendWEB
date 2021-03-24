import { Component,state,products } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Shop extends Component{
    state = {
        products : [],
        config:{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
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
        axios.delete("http://localhost:90/product/delete/" + _id,this.state.config)
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
                                        <p>Name: {product.productName}</p>
                                        <p>Description: {product.productDescription}</p>
                                        <p>Price: {product.productPrice}</p>
                                        <p>Rating: {product.productRating}</p>
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <button onClick={this.Deleteproduct.bind(this, product._id)} className="ButtonUI">Delete</button>
                                        <button className="ButtonUI"><Link to={"/update/"+ product.Id}>Update</Link></button>
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