import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Test from '../Collections/Test';

const Categories = () => {
    return (
        <div className='flex'>
            This a categories page!
            <ul>
                <li><Link to="/categories/test">Test-1</Link></li>
                <li><Link to="home">Test-2</Link></li>
            </ul>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Categories;