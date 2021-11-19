import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container, Row, Spinner,Button, Card, Col, } from 'react-bootstrap';
const MyOrder = () => {
    const{user}=useAuth();
    const[orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`https://tranquil-dusk-23555.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handleDelete = id =>{
        const proceed=window.confirm('Are you sure,you want to delete');
        if(proceed){
          fetch(`https://tranquil-dusk-23555.herokuapp.com/orders/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
              alert('deleted successfully!')
              const remainingOrders=orders.filter(order=>order._id !== id)
              setOrders(remainingOrders);
            }
          })
        }
        
      }
    return (
      // My Order(user)
        <div>
           
           <div className="container">
           <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
           {
            orders.length===0 ? 
               <div className="d-flex justify-content-center">
                 <Spinner animation="border" />
               </div>
               :
            orders.map(order=>
            <div key={order._id} className="col">
            
            <div className="card mb-3" style={{ maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={order.img} className="img-fluid rounded-start h-100" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                 
                 
                </div>
                <Row>
                <Col xs={6} md={4}>
                          <i style={{color:'blue'}} className="fas fa-gas-pump"> <span className="ps-1">Fuel Type</span> </i>
                              <Card.Text>{order.fuel_type}</Card.Text>
                              </Col>
                          <Col xs={6} md={4}>
                          <i style={{color:'blue'}} className="fab fa-searchengin"><span className="ps-1">Engine</span></i>
                              <Card.Text>{order.engine}</Card.Text>
                              </Col>
                          <Col xs={6} md={4}>
                          <i style={{color:'blue'}} className="fas fa-car"><span className="ps-1">D-Type</span></i>
                              <Card.Text>{order.drive}</Card.Text>
                              </Col>
                      </Row>
                      <Row className="py-3">
                          <Col className="text-start px-4" xs={6} md={6}>
                              <Button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Cancel</Button>
                          </Col>
                          <Col xs={6} md={6}>
                          <p className="card-text">Status : <span className="text-success fw-bold"> {order.status}</span></p>
                          </Col>
                      </Row>
              </div>
            </div>
          </div>
          </div>
          )
           }
              </div>
           </div>
            
        </div>
    );
};

export default MyOrder;