import React, { } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrderList = ({ order, userOrders, setUserOrders }) => {
    const { name, price, orderTime, img, status, _id } = order;

    // delete order
    //  https://secure-stream-98279.herokuapp.com/order/
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete ???')
        if (proceed) {
            toast.success(' Canceled order successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                // pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const url = `https://secure-stream-98279.herokuapp.com/order/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const available = userOrders.filter(user => user._id !== id);
                        setUserOrders(available);
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="container ">

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
                        <button onClick={() => handleDelete(_id)} className="btn btn-danger rounded-pill">Delete <ToastContainer /></button>

                        <h5 className="bg-light py-3 mt-2 w-50 mx-auto rounded-pill text-secondary px-3">{status} <Spinner animation="border " variant="success " style={{ height: "20px", width: "20px" }} /></h5>

                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default OrderList;