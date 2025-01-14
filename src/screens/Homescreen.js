import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import 'antd/dist/antd';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
function Homescreen() {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [duplicaterooms, setduplicaterooms] = useState([])

    const [searchkey , setsearchkey] = useState('')
    const [type, settype ] = useState('all')



    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true)
                const response = await axios.get('/api/rooms/getallrooms');
                const data = response.data.rooms; // Extract the 'rooms' array
                console.log(data); // Logs the array directly to the console
                setrooms(data);
                setduplicaterooms(data);
                setloading(false)
            } catch (error) {
                seterror(true)
                console.error(error)
                setloading(false)
            }
        };
        fetchData();
    }, []);


    function filterByDate(dates) {
        if (!dates || dates.length < 2) {
            console.log("Invalid date range selected");
            return;
        }

        const startDate = dates[0];
        const endDate = dates[1];

        // Update state
        setStartDate(startDate);
        setEndDate(endDate);

        // Log formatted dates
        console.log(startDate.format('DD-MM-YYYY'), endDate.format('DD-MM-YYYY'));


        var temprooms = []
        var availabilty = false

        for (const room of duplicaterooms) {
            if (room.currentbookings.length > 0) {

                for ( const booking of room.currentbookings) {
                    if (!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.startDate, booking.endDate)
                        && 
                    !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.setStartDate, booking.setEndDate))
                     {


                        if (

                            moment(dates[0]).format('DD-MM-YYYY') !== booking.startDate &&
                            moment(dates[0]).format('DD-MM-YYYY') !== booking.endDate &&
                            moment(dates[1]).format('DD-MM-YYYY') !== booking.setStartDate &&
                            moment(dates[1]).format('DD-MM-YYYY') !== booking.setEndDate
                        ) {
                            availabilty = true;
                        }
                    }

                }
            }

            if (availabilty ==true || room.currentbookings.length == 0) {
                temprooms.push(room);

            }
            setrooms(temprooms)
        }



            // Further logic to filter rooms can be added here
        }

        function filterBysearch() {

            const temprooms =  duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
            setrooms(temprooms)
        }

        function filterByType(e){

            settype(e)
          
            if(e!== 'all'){

                const temprooms = duplicaterooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())
                setrooms(temprooms)
            }else{
                setrooms(duplicaterooms)
            }
        }

        return (
            <div className='container'>

                <div className="row mt-5 bs" >


                    <div className="col-md-3">
                        <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />

                    </div >

                    <div className='col-md-5'>
                        <input type="text" className='form-control' placeholder='search rooms'
                        value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}}onKeyUp={filterBysearch}
                        />

                    </div>

                <div className="col-md-3">
                <select className='form-control 'value={type} onChange={(e)=>{filterByType (e.target.value)}}>
                        <option value="all">All</option>
                        <option value="deulx">Delux</option>
                        <option value="non-deulx">Non-Delux</option>

                    </select>

                </div>



                </div>


                <div className='row justify-content-center mt-5  '>
                    {loading ? (<Loader />
                    ) :(rooms.map((room) => {
                        return <div className='col-md-9 mt-3'>
                            <Room room={room} startDate={startDate} endDate={endDate} />

                        </div>;
                    })
                  
                       
                    )}
                </div>
            </div>
        );
    }


    export default Homescreen;