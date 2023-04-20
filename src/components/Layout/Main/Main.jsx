import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header2 from '../Header/Header2';

const Main = () => {
    return (
        <div>
            <div className='sticky z-50 top-0'>
                <Header />
            </div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;