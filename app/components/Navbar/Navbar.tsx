import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import CityLocation from './CityLocation';
import { FaBriefcaseMedical } from 'react-icons/fa';
import Categories from '../Categories/Categories';


const Navbar = () => {

    return (
        <div className='mx-auto'>
            <div className="navbar border-b-4 border-[#0e7673] text-sm">
                <div className="navbar-start">
                    <div className='flex item-center justify-center flex-col md:flex-row'>
                        <div>
                            <Categories />
                        </div>

                        <Link href='/' className='flex flex-col md:flex-row gap-2 items-center ml-3'>
                            <FaBriefcaseMedical className='text-2xl text-[#0e7673]' />
                            <p className='font-londrina text-3xl text-red-500'>Medicine</p>
                        </Link>
                    </div>
                </div>

                <div className="navbar-center">
                    <div className="join">
                        <input className="input input-border border border-slate-800 bg-white join-item text-xs md:w-64 lg:w-72" placeholder="Search Your medicine / ঔষধ ও পণ্য সার্চ করুন" />
                        <button className="btn join-item rounded-r-md text-white bg-[#0e7673]">
                            <CiSearch />
                        </button>
                    </div>
                </div>

                <div className="navbar-end gap-5 hide">

                    <CityLocation customStyles='hidden lg:block' />

                    <button className="indicator px-2 btn btn-ghost btn-circle bg-[#0e7673] text-2xl text-white">
                        <span className="indicator-item badge badge-error text-white text-xs">4</span>
                        <IoCartOutline />
                    </button>
                    <Link href='/login' className='btn bg-[#0e7673] text-white'>
                        Login/Sign Up
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;