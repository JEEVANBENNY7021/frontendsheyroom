import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Swal from 'sweetalert2';
import { FaUserTie } from "react-icons/fa";
import { Divider, Flex, Tag } from 'antd';
const { TabPane } = Tabs;

function ProfileScreen() { // Changed 'profilescreen' to 'ProfileScreen'

    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    }, []);

    return (
        <div className='ml-3 mt-3 bs'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1><FaUserTie /></h1>
                    <h1>My Profile</h1>
                    <br />
                    <h1>Name: {user.name}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</h1>
                    {user.isAdmin && (
                        <div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => window.location.href = '/admin'}
                            >
                                Admin Panel
                            </button>
                        </div>
                    )}                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBookings />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default ProfileScreen;

export function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                const { data } = await axios.post("/api/bookings/getbookingsbyuserid", { userid: user._id });
                console.log(data)
                setBookings(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching bookings:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user._id]);

    async function cancelBooking(bookingid, roomid) {
        try {
            setLoading(true)
            const result = await (await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })).data
            console.log(result)
            setLoading(false)
            Swal.fire('congrats ', ' Your booking has been cancelled', 'success').then(result => {
                window.location.reload()
            })
        } catch (error) {
            console.log(error)
            setLoading(false)
            Swal.fire('oops', ' something went wrong', 'error')
        }

    }


    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && (<Loader />)}
                    {bookings && (bookings.map(bookings => {

                        return <div className='bs'>
                            <h1> {bookings.room}</h1>
                            <p> <b> BookingId</b>: {bookings._id} </p>
                            <p> <b> CheckIn </b> :{bookings.startDate} </p>
                            <p> <b>  CheckOut </b>:{bookings.endDate} </p>
                            <p><b>  Amount </b>:{bookings.totalAmount} </p>
                            <p>
                            <b>Status</b> : {' '}
                            {bookings.status== 'cancelled' ? ( <Tag color="red">CANCELLED</Tag>): <Tag color="green"> CONFIRMED</Tag> }
                            </p>


                            {bookings.status !== 'cancelled' && (

                                <div className='text-right' >
                                    <button className="btn btn-primary" onClick={() => { cancelBooking(bookings._id, bookings.roomid) }} > CANCEL BOOKING </button>

                                </div>
                            )}

                        </div>

                    }))}
                </div>

            </div>

        </div>
    );
}
