import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Car from "./Car/Car";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-dusk-23555.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  },[]);
  return (
    <div>
      <Header></Header>
      <Container className="py-3">
      <Row xs={1} md={3} className="g-4">
        {
         cars.length===0 ? 
         <div className="d-flex justify-content-center">
           <Spinner animation="border" />
         </div>
         :
        cars.map((car) => (
          <Car key={cars._id} car={car}></Car>
        ))}
      </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
