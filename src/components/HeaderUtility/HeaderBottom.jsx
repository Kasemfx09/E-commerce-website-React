import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
    return (
        <div>
            <div className="bg-sky-900 border-t border-solid border-sky-800">
            <div className="container mx-auto">
                <div className="">
                    <ul className='flex flex-row justify-start gap-6 py-3 text-sky-200'>
                        <li className='hover:text-slate-400 transition duration-300'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='hover:text-slate-400 transition duration-300'>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li className='hover:text-slate-400 transition duration-300'>
                            <Link to='/collections'>Collections</Link>
                        </li>
                        <li className='hover:text-slate-400 transition duration-300'>
                            <Link to='/categories'>Categories</Link>
                        </li>
                        <li className='hover:text-slate-400 transition duration-300'>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default HeaderBottom;