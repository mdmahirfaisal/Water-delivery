import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const { setIsLoading, user, isLoading } = useAuth();

    useEffect(() => {
        // setIsLoading(true);
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }, [])

    const specificOrder = userOrders.filter(uniqOrder => uniqOrder.email === user.email);
    console.log(specificOrder);

    if (user) {

    }

    return (
        <div className="container">
            {isLoading ? <Spinner style={{ height: "100px", width: "100px" }} animation="border " variant="primary fs-1" /> :
                <div>
                    {specificOrder.map(order => <OrderList
                        key={order._id}
                        order={order}
                    ></OrderList>)}
                </div>}
        </div>
    );
};

export default Orders;