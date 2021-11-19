import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const{user}=useAuth();
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
       fetch('https://tranquil-dusk-23555.herokuapp.com/reviews')
       .then(res=>res.json())
       .then(data=>setReviews(data))
    },[])

    const rate = parseFloat(reviews?.rating)
 
    return (
    
        <div className="py-3">
            <h1 className="mt-5 text-primary">Here Our Clients Feedback</h1>
            <h6 className="mb-4 text-warning">*Rating*</h6>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                reviews.map(review=><div key={review._id} className="col">
                <div className="card h-100 border-0">
                <div className="text-center">
                  <img style={{width:'70px'}} src={review.img} className="card-img-top rounded-circle" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title">{review.username}</h5>
                <Rating className="text-warning"
                  initialRating={parseFloat(review.rating)}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly></Rating>
                    <p className="card-text">{review.description}</p>
                  </div>
                </div>
              </div>)
                }
 
  
  
  
</div>
</div>
        </div>
    );
};

export default UserReview;