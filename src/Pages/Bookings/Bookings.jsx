import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsCard from './BookingsCard';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookingsData, setBookingsData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookingsData(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            bookingsData.map((bookings, index) => <BookingsCard key={index} bookings={bookings}></BookingsCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Bookings;