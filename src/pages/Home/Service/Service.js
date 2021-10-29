import React from 'react';
import './Service.css';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, price, img, description } = service;


    return (
        <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
            <Card style={{ cursor: 'pointer' }}
                className="border-0 h-100"
            >
                <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" />
                <Card.Body className="pt-0">
                    <Card.Title as="h5" className="">{name}</Card.Title>
                    <Card.Title as="h4" className=" text-danger"><i className="fas fa-euro-sign me-1"> </i> {price}</Card.Title>
                    <Card.Text className="">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;