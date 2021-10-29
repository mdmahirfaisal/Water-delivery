import React from 'react';
import './Login.css';
import { Modal } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = (props) => {
    const { signInUsingGoogle, setError, setUser, setIsLoading, user, setModalShow, modalShow } = useAuth();

    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        if (user.email) {
            return setModalShow(false)
        } else {
            signInUsingGoogle()
                .then(result => {
                    setUser(result.user);
                    setError('');
                    history.push(from);
                    setModalShow(false)
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => setIsLoading(false));
        }
    };


    return (
        <Modal
            className="modal-background "
            show={modalShow}
            onHide={() => {
                setModalShow(false);
            }}
            {...props}
            size="md"
            centered
        >

            <Modal.Body className="modal-body bg-white p-3 " closeButton>

                <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-50 p-3 rounded-pill mx-auto fs-5 d-block">Continue with google</button>
            </Modal.Body>
        </Modal>
    );
};

export default Login;