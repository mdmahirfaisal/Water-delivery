import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {

        fetch('https://secure-stream-98279.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
            })
            .catch(error => console.log(error))
    }, [])

    const specificOrder = userOrders.filter(uniqOrder => uniqOrder.email === user.email);

    return (
        <div className="container my-5 py-5">
            <div className="my-5"><h1 className="text-secondary fw-bold">Thanks for your order</h1>
                <h6 className="text-secondary fw-bold">Your Order is being processed</h6></div>
            <div className="row">
                {specificOrder.map(order => <OrderList
                    key={order._id}
                    order={order}
                ></OrderList>)}
            </div>
        </div>
    );
};

export default Orders;