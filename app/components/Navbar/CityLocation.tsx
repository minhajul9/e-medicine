'use client';

import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';

const CityLocation = ({ customStyles }) => {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        fetch('https://ipinfo.io/json?token=aeb30a38a0275c')
            .then(res => res.json())
            .then(data => setLocation(data))

    }, [])

    return (
        <div className='flex items-center gap-2'>

            <CiLocationOn className=' font-extrabold text-red-700 text-xl p-0' />

            <p className={customStyles}>{location?.city}</p>
        </div>

    );
};

export default CityLocation;