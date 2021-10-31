import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg mt-5">
            <Card className=" container p-5 banner-bg border-0 text-dark ">
                <h2>Water is nothing, but life</h2>
                <h1 className="fw-bold banner-title">Great taste that's fresh
                    & consistent.</h1>
                <Card.Img src="https://i.ibb.co/vzxNByt/bottle-removebg.png" alt="Card image" className="px-5 pt-5 banner-img" />
            </Card>
        </div>
    );
};

export default Banner;