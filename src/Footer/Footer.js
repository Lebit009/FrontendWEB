
import React,{ Component } from "react";
import { Container,Row,  Col} from "react-bootstrap";


class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <Container fluid className="footer">
                    <div className="Footer1">
                        <Row className="foot">
                        <Col lg={4} xs={9}>
                        <div className= "list">
                            <h3 className="text-center">Popular Products</h3>
                            <hr className="text-center"></hr>
                            <ul className="text-center">
                                <li>Suspension</li>
                                <li>Breaks and Bearings</li>
                                <li>Couplings</li>
                                <li>Merchandise</li>
                                <li>Stands & Jockey Wheels</li>
                            </ul>
                        </div>
                        </Col>
                        <Col lg={4} xs={9}>
                        <div className= "list">
                            <h3 class="text-center">Site Details</h3>
                            <hr class="text-center"></hr>
                            <ul >
                                <p>
                                    <strong>Hello, Customers</strong>
                                </p>
                                <p>
                                    <em>Buy automotive parts through this website.</em>
                                </p>
                                <p>
                                <span>
                                Curators of ethical fashion and New Zealand designed. 
                                Hebe is a destination for style seekers. Located in Masterton's boutique Kuripuni Village, Hebe is lovingly and carefully curated by Owner and Buyer, Dani Burkhart. Dedicated to NZ designed, ethical fashion and accessories- Hebe is a beautiful style edit. 
                                </span>
                                </p>
                                <p>
                                    <span>
                                    Feel inspired exploring a beautifully designed space that reflects a love for styling and creating. Style tips await from a small, warm team who adore fashion- the current, the classic and the refined.
                                    </span>
                                </p>
                            </ul>
                        </div>
                        </Col>
                        <Col lg={4} xs={9}>
                        <div className="list">
                            <h3 class="text-center">Resources</h3>
                            <hr class="text-center"></hr>
                            <ul className="text-center">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Mail</li>
                            </ul>
                        </div>
                        </Col>
                        </Row>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
export default Footer;