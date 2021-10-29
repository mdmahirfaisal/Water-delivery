import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secure-stream-98279.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className="container">
            <h1 className="fw-bold text-secondary">OUR SERVICES</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;