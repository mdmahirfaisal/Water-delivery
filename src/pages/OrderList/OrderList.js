import React from 'react';

const OrderList = ({ order }) => {
    const { name, price, orderTime } = order;
    return (
        <div>
            <h2>{name}  {price} </h2>
            <p><b>{(new Date(orderTime).toDateString())}</b></p>
        </div>
    );
};

export default OrderList;