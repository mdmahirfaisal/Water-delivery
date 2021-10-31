import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Login from '../../Login/Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
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
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;