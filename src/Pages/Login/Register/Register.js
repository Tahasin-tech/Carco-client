import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import img from '../../../images/banner.webp'
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData,setLoginData]=useState({})
    const history = useHistory()
    const{user,registerUser,isLoading,authError}=useAuth();
    const handleOnBlur =e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e=>{
        if(loginData.password!==loginData.password2){
            alert('password didnot matched')
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                <div className="py-5" style={{backgroundColor:'#f2f5fb'}}>
                <h3>Register your account</h3>
                <p>Welcome back! Register your account</p>
        
               {!isLoading&& <Form onSubmit={handleLoginSubmit} className="text-start w-50 mx-auto">
               <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                 <Form.Control onBlur={handleOnBlur} name="name" placeholder="Your name" />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="email" required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="password" required type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Re-write Password</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="password2" required type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <p>
                  Already have an account?
              <NavLink to="/login">
              <Button className="border-0" style={{backgroundColor:'#f2f5fb',color:'blue'}}>
                 Login
                </Button>
              </NavLink>
              </p>
            
              </Form>}
              {isLoading&&<Spinner animation="border" />}
              {user?.email && !authError &&  <Alert variant="success">
                user created successfully
                    </Alert>}
              {authError &&  <Alert variant="danger">
                {authError}
                    </Alert>}
                </div>
                
                </Col>
                <Col className="py-5" xs={12} md={6}>
                <img className="img-fluid w-75" src={img} alt="" />
                </Col>
            </Row>
          
          
           
            <Footer></Footer>
        </div>
    );
};

export default Register;