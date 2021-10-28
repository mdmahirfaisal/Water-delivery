import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setError, setUser, setIsLoading, logOut } = useAuth();

    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(from);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    };


    return (
        <div>
            <h2>this is login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-danger">Login with google</button><br /><br />
            <button onClick={logOut} className="btn btn-danger">Log out</button>
        </div>
    );
};

export default Login;