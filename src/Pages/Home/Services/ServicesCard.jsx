import React from 'react';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, title, price } = service;
    console.log(service);
    return (
        <div className="card bg-base-100 border">
            <figure><img src={img} alt="Shoes" className='h-56 p-4 rounded-md' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='card-title text-warning'>Price: ${price}</h2>
                    <Link><HiArrowSmallRight className='text-3xl text-warning'></HiArrowSmallRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;