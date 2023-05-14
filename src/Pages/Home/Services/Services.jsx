import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='mt-44'>
            <div className='text-center w-1/2 mx-auto space-y-5'>
                <h3 className='text-warning text-xl font-extrabold tracking-wider'>Services</h3>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='text-[#737373] font-medium'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='flex justify-center mb-16'>
                <button className='btn btn-outline btn-warning'>More Products</button>
            </div>
        </div>
    );
};

export default Services;