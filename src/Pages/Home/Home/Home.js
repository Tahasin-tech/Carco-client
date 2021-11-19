import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeaturedCar></FeaturedCar>
            <UserReview></UserReview>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;