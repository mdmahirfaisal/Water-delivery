import React, { } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const OrderList = ({ order, }) => {
    const { name, price, orderTime, img, status } = order;

    // delete order
    //  https://secure-stream-98279.herokuapp.com/order/

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
                        <h5 className="bg-light py-3 mt-2 w-50 mx-auto rounded-pill text-secondary px-3">{status} <Spinner animation="border " variant="success " style={{ height: "20px", width: "20px" }} /></h5>

                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default OrderList;