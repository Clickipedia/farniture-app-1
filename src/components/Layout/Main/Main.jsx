import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='sticky z-50 top-0'>
                <Header />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;