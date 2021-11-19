import React, { useEffect, useState } from 'react';
import { Button,Card, Col, Container, Row, Spinner } from 'react-bootstrap';



const ManageProducts = () => {
    // manage product (admin)
    const [cars, setCars] = useState([]);
   useEffect(() => {
    fetch("https://tranquil-dusk-23555.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  },[]);
  const handleDelete = id =>{
    const proceed=window.confirm('Are you sure,you want to delete');
    if(proceed){
      fetch(`https://tranquil-dusk-23555.herokuapp.com/cars/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          alert('deleted successfully!')
          const remainingCars=cars.filter(car=>car._id !== id)
          setCars(remainingCars);
        }
      })
    }
    
  }
    return (
        <div>
    <Container className="py-3">
      <Row xs={1} md={3} className="g-4">
        {
        cars.length===0 ? 
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
        :
        cars.map((car) => (
      <Col  key={car._id}>
      <Card style={{height:'32rem'}}>
        <Card.Img style={{height:'14rem'}} variant="top" src={car.img} />
        <Card.Body>
        <Row className="mb-3">
            <Col className="text-start" xs={6} md={6}>
                <Card.Title>{car.name}</Card.Title>
                </Col>
            <Col className="bg-success" xs={6} md={6}>
                <Card.Title className="text-decoration-line-through">{car.pre_price}</Card.Title>
                <Card.Title className="text-light">$ {car.price}</Card.Title>
                </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
            <i style={{color:'blue'}} className="fas fa-gas-pump"> <span className="ps-1">Fuel Type</span> </i>
                <Card.Text>{car.fuel_type}</Card.Text>
                </Col>
            <Col xs={6} md={4}>
            <i style={{color:'blue'}} className="fab fa-searchengin"><span className="ps-1">Engine</span></i>
                <Card.Text>{car.engine}</Card.Text>
                </Col>
            <Col xs={6} md={4}>
            <i style={{color:'blue'}} className="fas fa-car"><span className="ps-1">D-Type</span></i>
                <Card.Text>{car.drive}</Card.Text>
                </Col>
        </Row>
        <div className="d-flex mt-4">
        <div className="text-start pt-3">
        <Button style={{backgroundColor:'grey',border:'none',color:'#979797'}}>Availability {car.stock}</Button>
        </div>
      
        <div className="text-start pt-3 ms-5">          
          <Button onClick={()=>handleDelete(car._id)} className="btn btn-danger">
            <span> Delete </span>
            <i className="fas fa-trash"></i>
               </Button>
               </div>
     
        </div>
      
        </Card.Body>
      </Card>
    </Col>
        ))}
      </Row>
      </Container>
        </div>
    );
};

export default ManageProducts;