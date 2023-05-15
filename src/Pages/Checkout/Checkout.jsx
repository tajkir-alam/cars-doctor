import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {
    const { user, setLoader } = useContext(AuthContext);

    const loadService = useLoaderData();
    const { _id, img, price, service_id, title, facility } = loadService;

    const handleCheckout = e => {
        setLoader(true);
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const serviceDetails = { serviceName, date, email, price, service_id, img }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    alert('Booking Successfully');
                    form.reset();
                }
            })
    }
    
    return (
        <div className='bg-[#F3F3F3] p-16 my-8'>
            <form onSubmit={handleCheckout}>
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className='space-y-2'>
                        <label htmlFor="name" className='block pl-2'>Service Name</label>
                        <select className="select w-full" name='serviceName'>
                            <option disabled selected>Please Select a Service</option>
                            {
                                facility.map((option, index) => <option key={index}>{option.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="date" className='block pl-2'>Servicing Date</label>
                        <input type="date" placeholder="Type here" name='date' className="input w-full" />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="email" className='block pl-2'>Email</label>
                        <input type="email" defaultValue={user?user.email : ""} name='email' className="input w-full" />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="price" className='block pl-2'>Due Amount</label>
                        <input defaultValue={price} name='price' className="input w-full" />
                    </div>
                </div>
                <input type="submit" value="Order Confirm" className='btn border-0 bg-[#FF3811] hover:bg-[#ff3911bd] text-white w-full mt-8 py-3 rounded-lg' />
            </form>
        </div>
    );
};

export default Checkout;