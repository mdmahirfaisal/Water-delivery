import React, { useState } from 'react';
import './PlaceOrder.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Container, Table } from 'react-bootstrap';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const [serviceDetail, setServiceDetail] = useState({});
    const { user } = useAuth();



    // load single form specific ID

    useEffect(() => {
        fetch(`http://localhost:5000/services/${orderId}`)
            .then(res => res.json())
            .then(data => setServiceDetail(data))
            .catch(error => {
                console.log(error);
            })
    }, [orderId]);


    const { name, price, img, description } = serviceDetail;
    const addOrder = {
        name,
        price,
        img,
        description
    };

    /// Add order to database
    const userData = { status: 'panging', name: user.displayName, email: user.email };

    const handlePlaceOrder = () => {
        const newOrder = { ...userData, ...addOrder, orderTime: new Date() };
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                toast("Your order placed successfully !!!");
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            })
    };


    return (

        <Container>
            <h1 className="text-secondary fw-bold mb-5">CHECK OUT</h1>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={img} style={{ height: "100%" }} />
                        <Card.Body className="px-5">
                            <Card.Title className="fw-bold  text-danger fs-4">{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="shadow px-4 pt-3 my-5" style={{ borderRadius: "15px" }}>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{name}</td>
                                    <td>1</td>
                                    <td>$ {price}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td>$ {price}</td>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                    <button onClick={handlePlaceOrder} className=" btn btn-danger w-75 rounded-pill">Checkout</button><ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;

// https://i.ibb.co/sPvPsk2/bottle-detail-removebg-preview.png