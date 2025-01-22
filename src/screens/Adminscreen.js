import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from "../components/Loader";
import   Swal from 'sweetalert2';
const { TabPane } = Tabs;
function Adminscreen() {

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
            window.location.href = "/home"
        }
    }, [])


    return (
        <div className='mt-3 ml-3 mr-3 bs'>
            <h2 className='text-center' style={{ fontSize: '25px' }}>
                <b>Admin Panel </b>
            </h2>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Bookings" key="1">
                    <Bookings />
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms />
                </TabPane>
                <TabPane tab="Add Rooms" key="3">
                   <AddRoom/>
                </TabPane>
                <TabPane tab="Users" key="4">
                    <Users />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Adminscreen;


// booking list components

export function Bookings() {

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Keeping error if needed
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await (await axios.get("/api/bookings/getallbookings")).data;
                setBookings(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchBookings(); // Call the async function inside useEffect
    }, []); // Empty dependency array


    return (
        <div className="row">
            <div className="col-md-12">

                <h1>Bookings</h1>
                {loading && <Loader />}
                {error && <p className="text-danger">Error: {error}</p>}
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length && (bookings.map(bookings => {
                            return <tr>
                                <td>{bookings._id}</td>
                                <td>{bookings.userid}</td>
                                <td>{bookings.room}</td>
                                <td>{bookings.startDate}</td>
                                <td>{bookings.endDate}</td>
                                <td>{bookings.status}</td>
                            </tr>
                        }))}

                    </tbody>
                </table>

            </div>
        </div>
    );
}


// room list components
export function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("/api/rooms/getallrooms");
                setRooms(response.data.rooms); // Adjust if the data structure differs
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message || "Something went wrong");
                setLoading(false);
            }
        };

        fetchBookings(); // Call the async function inside useEffect
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Rooms</h1>
                {loading && <Loader />}
                {error && <p className="text-danger">Error: {error}</p>}

                {!loading && !error && (
                    <table className="table table-bordered table-dark">
                        <thead className="bs">
                            <tr>
                                <th>Room ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Rent Per day</th>
                                <th>Max Count</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room._id}>
                                    <td>{room._id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.type}</td>
                                    <td>{room.rentperday}</td>
                                    <td>{room.maxcount}</td>
                                    <td>{room.phonenumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}


// user list components

export function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/users/getallusers");
                setUsers(response.data); // Adjust if the data structure differs
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message || "Something went wrong");
                setLoading(false);
            }
        };

        fetchUsers(); // Call the async function inside useEffect
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Users</h1>
                {loading && <Loader />}
                {error && <div className="alert alert-danger">{error}</div>}
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>isAdmin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'Yes' : 'No'} </td>
                            </tr>
                        }))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

// add room  components


export function AddRoom() {

    const [name, setname] = useState("")
    const [rentperday , setrentperday] = useState()
    const [maxcount , setmaxcount] = useState()
    const [description , setdescription] = useState()
    const [phonenumber , setphonenumber] = useState()
    const [type , settype] = useState()
    const [imageurl1 , setimageurl1] = useState()
    const [imageurl2 , setimageurl2] = useState()
    const [imageurl3 , setimageurl3] = useState()
    const [loading, setLoading] = useState(false);
   


     async function addRoom(){
        const newroom = {
            name ,
            rentperday ,
            maxcount ,
            description ,
            phonenumber ,
            type ,
            imageurls : [imageurl1 , imageurl2 , imageurl3]
    }

    try{
        setLoading(true);
    const result =await (await axios.post ('/api/rooms/addrooms' , newroom)).data
    console.log(result)
    setLoading(false);
    Swal.fire( ' Congrats ' , 'room added successfully' , 'success').then(result =>{
        window.location.href='/home'
    })
    }catch (error){
        console.log(error)
        setLoading (false)
        Swal.fire ( ' Oops ' , 'room not added' , 'error')
    }
    

}


    return(
        <div className="row">
          
            <div className="col-md-5">
               {loading && <Loader/>}
               
                <input type='text' className='form-control' placeholder='room name'
                value={name} onChange={(e) => setname(e.target.value)} />
                <input type='text' className='form-control' placeholder='rent per day'
                value={rentperday} onChange={(e) => setrentperday(e.target.value)} />
                <input type='text' className='form-control' placeholder='max count' 
                value={maxcount} onChange={(e) => setmaxcount(e.target.value)} />
                <input type='text' className='form-control' placeholder='description'
                  value={description} onChange={(e) => setdescription(e.target.value)} />
                <input type='text' className='form-control' placeholder='phone number' 
                value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
                


            </div>

            <div className="col-md-5">
            <input type='text' className='form-control' placeholder='type'
            value={type} onChange={(e) => settype(e.target.value)} />
                <input type='text' className='form-control' placeholder='Image URL1' 
                 value={imageurl1} onChange={(e) => setimageurl1(e.target.value)} />
                <input type='text' className='form-control' placeholder='Image URL2' 
                value={imageurl2} onChange={(e) => setimageurl2(e.target.value)} />
                <input type='text' className='form-control' placeholder='Image URL3' 
                 value={imageurl3} onChange={(e) => setimageurl3(e.target.value)} />


                <div className='text-right'>
                    <button className='btn btn-primary mt-2' onClick={addRoom}>Add Room</button>
                </div>
                 

            </div>


        </div>
    )

}

