import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenuUnfoldLine } from 'react-icons/ri';
const HeaderBottom = () => {
    return (
        <div>
            <div className="bg-cyan-900 border-t border-solid border-sky-800">
                <div className="container mx-auto">
                    <div className="flex flex-row justify-between items-center">
                        <div className="">
                            <h2 className='flex flex-row text-white items-center gap-1 text-lg cursor-pointer'> <span className='text-3xl text-red-600'><RiMenuUnfoldLine/></span> Shop by Department</h2>
                        </div>
                        <div className="">
                        <ul className='flex flex-row justify-center gap-6 py-3 text-sky-200 text-lg'>
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
                    <div className="text-lg">
                            <h2 className='text-white'> Hotline: +880-1850-121212</h2>
                        </div>
                    </div>

                 
                </div>
            </div>
           
        </div>
    );
};

export default HeaderBottom;