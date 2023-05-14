import React from 'react';
import bannerImg1 from '../../../assets/images/banner/1.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/4.jpg'
import bannerImg5 from '../../../assets/images/banner/5.jpg'
import bannerImg6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[calc(100vh-200px)] rounded-xl mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg1} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide6" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg2} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg3} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg4} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg5} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full absolute'>
                    <div className='text-white space-y-xl space-y-8 text-center lg:text-left lg:w-1/3 absolute bottom-1/4 mx-4 lg:ml-24'>
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <button className='btn btn-warning text-white'>Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <img src={bannerImg6} className="w-full" />
                <div className="absolute flex gap-2 right-1/3 lg:right-6 bottom-12">
                    <a href="#slide5" className="btn btn-circle hover:bg-orange-500 hover:border-0">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-500 hover:border-0">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;