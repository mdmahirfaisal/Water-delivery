import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="about">
            <h1 className="text-secondary fw-bold py-5" >ABOUT US</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className=""><img src="https://i.ibb.co/S3HZkjg/photo-1613679358839-d897e8dc1437-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" className="img-fluid rounded" alt="About img" /></div>

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="text-start">
                            <h3 className="text-warning"><i>Shortly About Us</i></h3>
                            <h1 className="fw-bold text-secondary mb-4">Learn About Freshwater shops</h1>
                            <p>There are many variations of passages of available but the majority have alteration in some form by inject humour or random words which don't look even slightly they will believe you. proident.</p>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="border mini-img-about mb-3"><img src="https://i.ibb.co/HKPWHWb/about-1.png" className="img-fluid w-100" alt="" /></div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="border mini-img-about mb-3"><img src="https://i.ibb.co/47TVpHg/about-2.png" className="img-fluid w-100 " alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;