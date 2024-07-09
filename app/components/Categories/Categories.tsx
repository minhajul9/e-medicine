import Link from 'next/link';
import React from 'react';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { HiBars3BottomLeft } from 'react-icons/hi2';

const Categories = () => {
    const categories = [
        {
            link: 'heart-disease',
            title: "Heart Disease"
        },
        {
            link: 'blood-pressure',
            title: "Blood Pressure"
        },
        {
            link: 'fever',
            title: "Fever"
        }
    ]
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-sm bg-[#0e7673] text-white text-2xl p-1  drawer-button">
                    <HiBars3BottomLeft title='Categories' />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <Link href=''>
                            <BsBookmarkHeartFill className='text-red-500 text-xl' />
                            <span>Favourites</span>
                        </Link>
                    </li>
                    {
                        categories.map((item, index) =>
                            <li key={index}>
                                <Link href={item.link}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
};

export default Categories;