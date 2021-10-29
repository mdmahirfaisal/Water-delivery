import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { orderId } = useParams();

    useEffect(() => {
        fetch('')
    }, [])


    return (
        <div>
            <h2>Place Order number: ({orderId})</h2>

        </div>
    );
};

export default PlaceOrder;