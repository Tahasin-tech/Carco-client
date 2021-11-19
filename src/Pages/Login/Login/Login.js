import React, { useState } from 'react';
import {Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import google from '../../../images/google.png'
import img from '../../../images/login.png'
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const{user,registerUser,isLoading,authError,loginUser,signInWithGoogle}=useAuth();
   const location = useLocation();
   const history = useHistory();
    const [loginData,setLoginData]=useState({})
    const handleOnBlur =e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e=>{
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>[
          signInWithGoogle(location,history)
    ]
    return (
        <div>
            <Header></Header>
            
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                <div className="py-5" style={{backgroundColor:'#f2f5fb'}}>
                {isLoading&&<Spinner animation="border" />}
                <h3>Log in to your account</h3>
                <p>Welcome back! Sign in to your account</p>
                <Button onClick={handleGoogleSignIn} style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} variant="light">
                   <img style={{width:'2rem'}} src={google} alt="" />
                  <span className="ms-2 text-danger">Login with google</span> 
                </Button>
                <p className="my-4">OR</p>
               <Form onSubmit={handleLoginSubmit} className="text-start w-50 mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="email" required type="email" placeholder="Enter Your Email" />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="password" required type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <p>
                  Don't have an account?
              <NavLink to="/register">
              <Button type="submit" className="border-0" style={{backgroundColor:'#f2f5fb',color:'blue'}}>
                 Sign Up
                </Button>
              </NavLink>
              </p>
              
              {user?.email && !authError &&  <Alert variant="success">
                User Joined Successfully!
            </Alert>}
              {authError &&  <Alert variant="danger">
                {authError}
                </Alert>
                }
              </Form>
              
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

export default Login;