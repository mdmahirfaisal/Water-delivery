import React, { useEffect, useState } from 'react';
import ManageOrderInfo from '../ManageOrderInfo/ManageOrderInfo';

const ManageOrders = () => {
    const [allUserOrders, setAllUserOrders] = useState([]);

    useEffect(() => {
        fetch('https://secure-stream-98279.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                setAllUserOrders(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container my-5 py-5">

            <div className="row">
                {
                    allUserOrders.map(allOrder => <ManageOrderInfo
                        key={allOrder._id}
                        allUserOrders={allUserOrders}
                        setAllUserOrders={setAllUserOrders}
                        allOrder={allOrder}
                    ></ManageOrderInfo>)
                }
            </div>


        </div>
    );
};

export default ManageOrders;