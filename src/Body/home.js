
import React,{ Component } from "react";
import {Container, Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {CardGroup} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import {Parallax} from 'react-parallax';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const image1 ="8.png";
const inlineStyle = {
    color: '#000',
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

class Home extends Component{
    render(){
        return(
            <React.Fragment>     
            <Container fluid className="home">
                <Row className="down">
                    <div class="main__img"> 
                    </div>
                    <div className="overlap__text">
                        <h1>Affordability at your </h1>
                        <h2>Fingertip.</h2>
                        <Button className="bg-secondary">Shop Now</Button>
                    </div>

                    {/* Card */}
                    </Row>
                    <h1 class="text-center">Featured Products</h1>
                    <Row>
                    <CardGroup className="myCardMain">
                        <Card className="myCard">
                            <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/61%2ByDjbEBaL._AC_SX425_.jpg" />
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="myCard">
                            <Card.Img src="https://www.re-spa.com/upload/img/CxRicambiHeader.jpg" />
                            <Card.Body>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="myCard">
                            <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/71mk4WwAIIL._AC_SL1200_.jpg" />
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup> 
                    </Row>

                {/* Parallax */}
                <div className="Parallax">  
                <Parallax  bgImage={ image1 } strength={500}>
                <div style={{ height:500 }}>
                <div style={inlineStyle }>Shop the Automotive Parts</div>
                </div>
                </Parallax>
                </div> 
                
                <div className="white2"></div>
   
                <Row className="overlay">
                    <Col >
                    <Image src="3.png" fluid/>
                    </Col>
                    <Col >
                    <Image src="4.png" fluid/>
                    </Col>
                    <Col >
                    <Image src="6.png" fluid/>
                    </Col>    
                    <Col >
                    <Image src="5.png" fluid/>
                    </Col> 
                </Row>

                {/* Carousel */}
                 <Row>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        </Row>
            </Container>  
            </React.Fragment>
        )
    }
}

export default Home;