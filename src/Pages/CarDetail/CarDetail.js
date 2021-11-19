import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import banner from '../../images/images -1.jpg'
import Rating from "react-rating";
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const CarDetail = () => {
    const{id}=useParams();
    const{user}=useAuth()
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch(`https://tranquil-dusk-23555.herokuapp.com/cars/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://tranquil-dusk-23555.herokuapp.com/orders',data)
        .then(res=>{
          console.log(res)
            if(res.data.insertedId){
                alert('successfully added your order! ')
                reset();
            }
        })
    };
    const rating = parseFloat(details?.rating)
    return (
        <div>
          {/* Header */}
            <Header></Header>

            {/* car detail here */}

            <div className="card bg-light text-dark mb-1">
        <img style={{filter: 'blur(2px)'}} height="450" src={banner} alt="..." />
        <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
          <h1 className="card-title fw-bold text-white">
            Purchase Your Dream CAR
            <br />
           <span className="text-warning">{details?.name}</span>
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row ">
          <div className="col-12 col-md-8 text-start">
            <div className=" mb-3">
              <img
                src={details?.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h1 className="card-title">{details?.name}</h1>
                <div>
                  <h3>
                    <span className="fw-bold text-danger">
                      ${details?.price}
                    </span>
                   
                  </h3>
                  <Rating className="text-warning"
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly></Rating>
                </div>
                <div>
                  
                
                </div>
                <div className="fw-bold card-text mt-3">Overview</div>
                <p className="">{details?.description}</p>
                <Row>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fas fa-gas-pump"> <span className="ps-1">Fuel Type</span> </i>
                <Card.Text>{details?.fuel_type}</Card.Text>
                </Col>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fab fa-searchengin"><span className="ps-1">Engine</span></i>
                <Card.Text>{details?.engine}</Card.Text>
                </Col>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fas fa-car"><span className="ps-1">Drive</span></i>
                <Card.Text>{details?.drive}</Card.Text>
                </Col>
        </Row>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            {details?.name ? (
              <div className="card bg-dark text-white pb-5">
                <h3 className="fw-bold text-center my-3">
                  Order This Awesome Car
                </h3>

{/* start */}

<form  onSubmit={handleSubmit(onSubmit)}>
  <Row className="mx-auto">
    <Col className="text-start" xs={12} md={12}>
      <p>Email Address </p>
    <div className="d-flex align-items-center pb-2">
      
      {user?.email && <input className="w-75" readOnly={true} defaultValue={user?.email} {...register("email")}/>} 
      </div>
    </Col>
    <Col className="text-start" xs={12} md={12}>
    <p>Name </p>
    <div className="d-flex align-items-center pb-2">
       
        {user?.displayName && <input className="w-75" readOnly={true} defaultValue={user?.displayName} {...register("username", { required: true})} placeholder="user's name"/>}
        </div>
    </Col>
    <Col className="text-start" xs={12} md={12}>
    <p>Car Model </p>
    <div className="d-flex align-items-center pb-2">
        
        {details?.name && <input className="w-75" readOnly={true} defaultValue={details?.name} {...register("name", { required: true})} placeholder="car name"/>}
        </div>
    </Col>
    <Col className="text-start" xs={12} md={12}>
    <p>Fuel Type </p>
    <div className="d-flex align-items-center pb-2">
        
        {details?.fuel_type && <input className="w-75" readOnly={true} defaultValue={details?.fuel_type} {...register("fuel_type", { required: true})} placeholder="Fuel Type"/>}
        </div>
    </Col>
    <Col className="text-start" xs={12} md={12}>
    <p>Engine</p>
    <div className="d-flex align-items-center pb-2">
        
        {details?.engine && <input className="w-75" readOnly={true} defaultValue={details?.engine} {...register("engine", { required: true})} placeholder="Engine"/>}
        </div>
    </Col>
    <Col className="text-start" xs={12} md={12}>
    <p>Drive</p>
    <div className="d-flex align-items-center pb-2">
        
        {details?.drive && <input className="w-75" readOnly={true} defaultValue={details?.drive} {...register("drive", { required: true})} placeholder="Drive"/>}
        </div>
    </Col>

    <Col className="text-start" xs={12} md={12}>
    <p>Car Price </p>
    <div className="d-flex align-items-center pb-2">
       
      {details?.price && <input className="w-75" readOnly={true} defaultValue={details?.price} type="number" {...register("price")} placeholder="car price"/>}
        </div>
    </Col>
   

    <div className="d-none">
       
      {details?.img && <input className="w-75" readOnly={true} defaultValue={details?.img} {...register("img")} placeholder="car image"/>}
        </div>
    
     
    <Col className="text-start" xs={12} md={12}>
    <p>Phone </p>
    <div className="d-flex align-items-center pb-2">
    
       <input className="w-75" {...register("phone", { required: true, maxLength: 20 })} placeholder="add your phone number" required/>
       </div>
    </Col>
    
    <Col xs={12}md={12}>
    {'pending' && <input className="d-none" readOnly={true} defaultValue="pending.." {...register("status", { required: true, maxLength: 20 })} placeholder="status"/>}
    </Col>
    <Col className="text-start" xs={12}md={12}>
    <input className="btn btn-success" type="submit" value="Order"/>
    </Col>
  </Row>
  
    </form>

{/* end */}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      
            <Footer></Footer>
        </div>
    );
};

export default CarDetail;