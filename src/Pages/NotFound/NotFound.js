import { Button } from 'react-bootstrap';
import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
             <div className="py-5">
            <h1 style={{color:'#e5e5e5',fontSize:'150px'}}>404</h1>
            <h4 className="fw-bold">Oops! The page you requested was not found</h4>
            <p>Make sure that you have typed the correct URL</p>
            <NavLink to='/home'>
            <Button variant="outline-primary">Back to home page</Button>{' '}
            </NavLink>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default NotFound;