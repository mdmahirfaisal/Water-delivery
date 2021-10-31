// import axios from 'axios';
import React, { useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrderInfo = ({ allOrder, setAllUserOrders, allUserOrders }) => {
    const [orders, setOrders] = useState([]);
    const { name, price, _id, status, img, orderTime } = allOrder;


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete ???')
        if (proceed) {
            toast.success(' Canceled order successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const url = `https://secure-stream-98279.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const available = allUserOrders.filter(user => user._id !== id);
                        setAllUserOrders(available);

                    }
                })
                .catch(error => console.log(error))
        }
    };


    // handle status change 
    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        orders.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedOrders.push(order)
        })
        setOrders(modifiedOrders);

        const modifiedStatus = {}

        const url = `https://secure-stream-98279.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Status changed successfully')

            })
            .catch(error => toast.error(error.message));



        // axios.put('https://secure-stream-98279.herokuapp.com/order', modifiedStatus)
        //     .then(res => res.data && toast.success(`Set to ${status}`))
        //     .catch(error => toast.error(error.message));
        // console.log(modifiedStatus);
    }

    return (
        <div>
            <Card className="mb-3" style={{ maxWidth: '' }}>
                <Row className="d-md-flex align-items-center">
                    <Col md={3} className="my-auto">
                        <Card.Img src={img} />
                    </Col>
                    <Col md={5}>
                        <Card.Body className="text-start">
                            <Card.Title>category{name}</Card.Title>
                            <Card.Text>
                                <ul type="none">
                                    <li>Order time: {(new Date(orderTime).toDateString('dd/MM/yyyy'))}</li>
                                    <li>Price: ${price}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4}>
                        <button onClick={() => handleDelete(_id)} className="btn btn-danger w-75 mb-2 rounded-pill">Delete <ToastContainer /></button>
                        <Form.Select
                            className={status === "Pending" ? "btn btn-danger w-75" : status === "Approve" ? "btn btn-success w-75" : "btn btn-info w-75"}
                            defaultValue={status}
                            onChange={e => handleStatusChange(_id, e.target.value)}>
                            <option className="bg-white py-1 text-muted">Pending</option>
                            <option className="bg-white py-1 text-muted">Approve</option>
                        </Form.Select>

                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ManageOrderInfo;