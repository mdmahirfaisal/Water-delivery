import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Login from '../../Login/Login/Login';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const { modalShow, setModalShow } = useAuth();
    return (
        <div>
            <Login
                show={modalShow}
                onHide={() => {
                    setModalShow(false)
                }}
            ></Login>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;