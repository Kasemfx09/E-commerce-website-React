import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown} from "react-icons/hi";

const HeaderTop = () => {
    return (
        <div>
             <div className='bg-sky-900 py-3'>
                <div className='top-header container mx-auto flex flex-row justify-between'>
                    <div>
                        <p className='text-green-100'>Welcome to TopEdge Online Store !</p>
                    </div>
                    <div>
                        <ul className='flex flex-row gap-3 '>
                            <li><Link href="#" className='text-green-100 hover:text-fuchsia-300 transition duration-300'>Store Location</Link></li>
                                <span className='text-white'>|</span>
                            <li><Link to="" className='text-green-100 hover:text-fuchsia-300 transition duration-300'>Track Order</Link></li>
                                <span className='text-white'>|</span>
                            <li><Link to="" className='text-green-100 hover:text-fuchsia-300 transition duration-300 flex items-center'>USD<HiChevronDown/></Link></li>
                                <span className='text-white'>|</span>
                            
                            <li>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="flex items-center text-green-100 hover:text-fuchsia-300 transition duration-300 cursor-pointer">English <HiChevronDown/></label>
                                    <ul tabIndex={0} className="menu dropdown-content px-2 shadow bg-base-100 w-36 rounded mt-3 ">
                                        <li><Link className='hover:text-sky-600'> <img className='w-6 flag' src="https://www.countryflagsapi.com/flagssvg/bd.svg" alt="" /> Bengali</Link></li>
                                        <li><Link><img className='w-6' src="https://countryflagsapi.com/png/sa" alt="Saudi Arabia flag"/> Arabian</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;