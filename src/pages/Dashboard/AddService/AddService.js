import axios from 'axios';
import React from 'react';
import './AddService.css';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
        axios.post('https://secure-stream-98279.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div className="add-background mt-5 py-5 ">
            <h2 className="fw-bold text-secondary mt-5">PLEASE ADD A SERVICE</h2>
            <div className="container shadow p-5 form-container">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100  p-3 form-control">
                    <Form.Label>Name</Form.Label>
                    <input className="mb-2 form-control " {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <Form.Label>Price</Form.Label>
                    <input className="mb-2 form-control " type="number" {...register("price")} placeholder="Price" />
                    <Form.Label>Image URL</Form.Label>
                    <input className="mb-2 form-control " {...register("img")} placeholder="Image URL" />
                    <Form.Label>Description</Form.Label>
                    <textarea className="mb-2 form-control " {...register("description")} placeholder="Description" />
                    <input className="w-75 mx-auto rounded-pill btn btn-danger" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;