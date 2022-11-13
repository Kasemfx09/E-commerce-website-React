import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegUser} from 'react-icons/fa';
import { Form } from 'react-router-dom';

const HeaderMiddle = () => {
    return (
        <div>
            <div className="bg-sky-900 py-4">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div className=""><h2 className='text-3xl text-white font-bold'>Top<span className='text-red-600'>Edge</span></h2></div>
                    <div className="bg-cyan-800 w-2/5 h-30 ">
                        <Form className='border border-solid border-white rounded-md'>
                            <div className="flex flex-row items-center">
                            <input type="text" name="" id="" className='focus:outline-none bg-sky-900 p-2 w-full h-full rounded-md text-white text-lg'/>
                            <button className='bg-red-600 p-2 px-3 rounded-tr-md rounded-br-md text-white'>Search</button>
                            </div>
                        </Form>
                    </div>
                    <div className="flex flex-row gap-6 items-center text-slate-400">
                        <div className="text-3xl text-white cursor-pointer hover:text-red-700 transition duration-300"><MdFavoriteBorder/></div>
                        <div className="text-3xl text-white cursor-pointer hover:text-red-700 transition duration-300"><HiOutlineShoppingBag /></div>
                        <div className="text-2xl text-white cursor-pointer hover:text-red-700 transition duration-300"><FaRegUser/> </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;