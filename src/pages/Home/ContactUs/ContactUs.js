import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div id="contact" className="bg-light pb-5">
            <h1 className="text-secondary  py-5 fw-bold">CONTACT US</h1>
            <div className="container">
                <form className="form-control w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label>First name</Form.Label>
                    <input className="form-control" {...register("firstName")} placeholder="First name" />
                    <Form.Label>Last name</Form.Label>

                    <input className="form-control" {...register("lastName")} placeholder="Last name" />
                    <Form.Label>Email</Form.Label>

                    <input className="form-control" {...register("email")} placeholder="Email" />
                    <Form.Label>Address</Form.Label>

                    <input className="form-control" {...register("address")} placeholder="Address" />
                    <Form.Label>Description</Form.Label>

                    <textarea className="form-control" {...register("description")} placeholder="Description" />
                    <input className="btn btn-danger rounded-pill w-75 mx-auto my-2" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default ContactUs;