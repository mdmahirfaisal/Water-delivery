import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="container">
            <img src="https://i.ibb.co/7XQC16Q/HTML-404-Error-Page.gif" alt="" className="w-100 img-fluid" />
            <Link to="/home" ><button className="btn btn-danger w-100 rounded-pill fs-4 py-3 my-3">Back to home</button></Link>
        </div>
    );
};

export default NotFound;