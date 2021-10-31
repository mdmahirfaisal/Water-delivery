import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrderInfo = ({ allOrder, setAllUserOrders, allUserOrders }) => {
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
                        <button onClick={() => handleDelete(_id)} className="btn btn-info w-75 mb-2 rounded-pill">Delete <ToastContainer /></button>

                        <Form.Select aria-label="Default select example" className="w-75 mx-auto rounded-pill">
                            <option>{status}</option>
                            <option value="1">Approve</option>
                        </Form.Select>

                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ManageOrderInfo;