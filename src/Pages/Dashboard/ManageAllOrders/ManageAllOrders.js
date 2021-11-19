import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner,Button, Card, Col, } from 'react-bootstrap';



const ManageAllOrders = () => {

  // manage all order(admin)
    const[orders,setOrders]=useState([]);
    const[isUpdate,setIsUpdate]=useState(null);
    useEffect(()=>{
        fetch('https://tranquil-dusk-23555.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[isUpdate])
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
      const handleUpdate = id =>{
    
        const url=`https://tranquil-dusk-23555.herokuapp.com/orders/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          if(data.matchedCount>0){
            alert('approved successfully!')
            setIsUpdate(true)
          }else{
            setIsUpdate(false)
          }
           console.log(data)
        });
      }
    
    return (
        <div>
            <Container>
           
            <Row xs={1} md={3} className="g-4">
            {
                orders.length===0 ? 
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" />
                </div>
                :
                orders.map(order=><Col
                key={order._id}
                >
                    <Card style={{height:'30rem'}}>
                      <Card.Img style={{height:'12rem'}} variant="top" src={order.img} />
                      <Card.Body>
                      <Row className="mb-3">
                          <Col className="text-start" xs={12} md={12}>
                              <Card.Title style={{fontWeight:'300',fontSize:'13px'}}>Customer Email:
                              <span className="text-danger"> {order.email}</span></Card.Title>
                        </Col>
                        <hr/>
                          <Col className="text-start" xs={6} md={6}>
                              <Card.Title>{order.name}</Card.Title>
                        </Col>
                          <Col className="bg-success" xs={6} md={6}>
                              <Card.Title className="text-decoration-line-through">{order.pre_price}</Card.Title>
                              <Card.Title className="text-light">$ {order.price}</Card.Title>
                              </Col>
                      </Row>
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
                          <i style={{color:'blue'}} className="fas fa-car"><span className="ps-1">Drive</span></i>
                              <Card.Text>{order.drive}</Card.Text>
                              </Col>
                      </Row>
                    
                     <Row>
                     
                      <Col xs={12} md={6}  className="text-start pt-3">
                      <Button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Delete</Button>
                      </Col>
                      <Col xs={12} md={6}  className="text-start pt-3">
                       <span>Status : <span className="text-success"> {order.status}</span></span>
                      <Button onClick={()=>handleUpdate(order._id)} className="btn btn-success">Status Update</Button>
                      </Col>
                      </Row>
                      </Card.Body>
                    </Card>
                  </Col>)
            }
             </Row>
             </Container>
        </div>
    );
};

export default ManageAllOrders;