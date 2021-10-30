import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Footer.css';
// import { MdGoogle } from "react-icons/md";
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="footer-background mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 text-md-start">
                        <h3 className="text-light fw-bold">Address</h3>
                        <p className=" mb-0 mt-3">
                            666 Road Broklyn Street, 88
                        </p>
                        <p className=" m-0">
                            New York, USA
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <h3 className="text-light fw-bold">
                            Follow
                        </h3>
                        <h3>
                            <HashLink to="/home#home"><button className="btn btn-danger mx-1">facebook</button></HashLink>
                            <HashLink to="/home#home"><button className="btn btn-danger mx-1">twitter</button></HashLink>
                            <HashLink to="/home#home"><button className="btn btn-danger mx-1">google</button></HashLink>
                            <HashLink to="/home#home"><button className="btn btn-danger mx-1">youtube</button></HashLink>
                        </h3>
                    </div>

                    <div className="col-sm-12 col-md-3 text-md-end">
                        <h3 className="text-light fw-bold">Contact</h3>
                        <p className=" mb-0 mt-3">
                            0192222xxxx
                        </p>
                        <p className="= m-0">
                            rjmahir.faisal@gmail.com
                        </p>


                    </div>
                </div>
                <div className="mt-5 py-4 ">
                    <p className="fs-6">© Copyright 2021 All Rights is Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;