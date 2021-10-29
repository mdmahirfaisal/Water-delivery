import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [file, setFile] = useState(null);
    const onSubmit = data => {
        console.log(data)
        reset()
        axios.post('http://localhost:5000/services', data)
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
        <div>
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
                <input className="mb-2 form-control " {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input className="mb-2 form-control " type="number" {...register("price")} placeholder="Price" />
                <input className="mb-2 form-control " {...register("img")} placeholder="Image URL" />
                <input className="mb-2 form-control " {...register("description")} placeholder="Description" />
                <input className="w-25 mx-auto rounded-pill btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddService;