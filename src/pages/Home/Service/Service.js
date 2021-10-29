import React from 'react';
import './Service.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Service = ({ service }) => {
    const { name, price, img, description, _id } = service;
    const { user, setModalShow } = useAuth();


    return (
        <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">


            {user.email ? <Link className="text-decoration-none" to={`/placeorder/${_id}`}>
                <Card style={{ cursor: 'pointer' }}
                    className="border-0 h-100"
                >
                    <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" />
                    <Card.Body className="pt-0">
                        <Card.Title as="h5" className="">{name}</Card.Title>
                        <Card.Title as="h4" className=" text-danger"><i className="fas fa-euro-sign me-1"> </i> {price}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
                :
                <Link className="text-decoration-none" onClick={() => setModalShow(true)} to={`/placeorder/${_id}`}>
                    <Card style={{ cursor: 'pointer' }}
                        className="border-0 h-100"
                    >
                        <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" />
                        <Card.Body className="pt-0">
                            <Card.Title as="h5" className="">{name}</Card.Title>
                            <Card.Title as="h4" className=" text-danger"><i className="fas fa-euro-sign me-1"> </i> {price}</Card.Title>
                            <p>{description}</p>
                        </Card.Body>
                    </Card>
                </Link>
            }

        </div>
    );
};

export default Service;