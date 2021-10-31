import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Login from '../../Login/Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    const { modalShow, setModalShow } = useAuth();

    const history = useParams();
    const url = '/home';


    return (
        <div id="home">
            <Login
                show={modalShow}
                onHide={() => {
                    setModalShow(false)
                    history.push(url)
                }}
            ></Login>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;