import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const { setIsLoading, isLoading } = useAuth();
    const [services, setServices,] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);
    return (
        <>
            <h1 className="fw-bold text-secondary py-5 bg-light">OUR SERVICES</h1>
            <div className="container">
                {isLoading ? <Spinner style={{ height: "100px", width: "100px" }} animation="border " variant="primary fs-1" /> :
                    <div className="row">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>}
            </div>
        </>
    );
};

export default Services;