import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import logo from '../../../images/carco.png'
import img_1 from '../../../images/footer-1.jpg'
import img_2 from '../../../images/footer-2.jpg'
import img_3 from '../../../images/footer-3.jpg'
import img_4 from '../../../images/footer-4.jpg'
const Footer = () => {
    return (
        <div className="pt-4" style={{backgroundColor:'#2b0f42'}}>
            <Container>
            
            <Row>
                
                <Col xs={12} md={3} className="text-white text-start">
                <img className="w-50" src={logo} alt="" />
                <p style={{color:'grey',fontSize:'15px'}}>Over 200 Cars have been shipped all over the world by our cpmany that can bener be happen b yt ither companies theme.Stay wish us t gest a lot of cars that is great in featurer.</p>
                
                <h6>Get Notified</h6>
                <InputGroup className="mb-3">
              <FormControl
               placeholder="Email Address"
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
             />
              <InputGroup.Text className="bg-primary" id="basic-addon2">Submit</InputGroup.Text>
             </InputGroup>
            
                </Col>
                
                <Col xs={12} md={3} className="text-white text-start">
                
                <h6 className="mt-4 text-info">Our Branches</h6>
                    <p style={{color:'grey',fontSize:'15px'}}>Dhaka <br />
                   Chittagong  <br />
                 Sylhet</p>
               
                </Col> 
               
                <Col className="text-white text-start" xs={12} md={3}>
                    <h6 className="text-info">Find Us On</h6>
                    <i style={{fontSize:'30px'}} className="fab fa-facebook-square me-2"></i>
                    <i style={{fontSize:'30px'}} className="fab fa-instagram-square me-2"></i>
                    <i style={{fontSize:'30px'}} className="fab fa-twitter-square"></i>
                   
                </Col>
            </Row>
            </Container>
            <p className="text-white">All Rights reserved Tahasin</p>
        </div>
    );
};

export default Footer;