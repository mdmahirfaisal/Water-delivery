import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Login from '../../Login/Login/Login';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    const { modalShow, setModalShow } = useAuth();
    return (
        <div id="home">
            <Login
                show={modalShow}
                onHide={() => {
                    setModalShow(false)
                }}
            ></Login>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;