import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/carbanner.png'
const Banner = () => {
    return (
        <div className="py-5 text-white" style={{backgroundColor:'#6610f2'}}>
            <Container>
            
            <Row>
            <Col xs={12} md={6} className="text-start">
            <h1 style={{fontSize:'60px'}}>Wanna Have a Car <br /> Of You!</h1>
            <p>Our Car offers are the best in the world,compare and see.</p>
           <NavLink to="/explore"><Button variant="outline-primary">See Now</Button></NavLink>
            </Col>
            <Col  xs={12} md={6}>
            <img className="img-fluid w-75" src={banner} alt="" />
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;