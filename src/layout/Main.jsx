import React from 'react';
import Header from '../Pages/SharablePages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharablePages/Footer/Footer';

const Main = () => {
    return (
        <>
            <div className='custom-container'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;