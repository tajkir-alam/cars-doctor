import React from 'react';
import abtImg1 from '../../../assets/images/about_us/person.png'
import abtImg2 from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 my-16'>
            <div className='relative'>
                <img src={abtImg1} alt="" className='rounded-md' />
                <img src={abtImg2} alt="" className='hidden lg:block absolute top-1/2 left-1/3 rounded-lg' />
            </div>
            <div className='space-y-6'>
                <h4 className='text-lg text-warning text-md font-medium'>About Us</h4>
                <h2 className='text-5xl font-semibold'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='text-[#737373]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className='text-[#737373]'>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className='btn bg-[#FF3811] border-0 rounded-md'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;