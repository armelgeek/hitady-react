import React, { useState, useRef } from 'react';
import DatePicker, { registerLocale }  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, eachDayOfInterval, format, parseISO } from 'date-fns';
import el from "date-fns/locale/fr"; // the locale you want
registerLocale("fr", el); 
import RoomPrice from './Booking/RoomPrice'
import TotalAmount from './Booking/TotalAmount'
import NumberFormat from 'react-number-format';
export default function BookingCard({ roomId,roomPrice, bookingData }) {
   /*const d = new Date();
    const currMonth = d.getMonth();
    const currYear = d.getFullYear();
new Date(currYear, currMonth, 1)
    */

    const formRef = useRef();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const setStartingDate = (startDate = startDate) => {
        let endDate = '';

        if (startDate > endDate) {
            endDate = addDays(startDate, 1);
        }
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const setEndingDate = (endDate = endDate) => {
        setEndDate(endDate);
    };
    const holidays = [
        new Date(2021, 6, 26),
        new Date(2021, 6, 27),
        new Date(2021, 6, 28),
        new Date(2021, 6, 29),
        new Date(2021, 6, 30),
    ];
    const excludeDates = () => {
      return bookingData.map(data => parseISO(data));
    };

    const formatDate = (startDate, endDate) => {
        return eachDayOfInterval({
            start: new Date(startDate),
            end: new Date(endDate),
        }).map(date => format(new Date(date), 'yyyy-MM-dd'));
    };
    const auth = () =>{
        setIsLoggedIn(true);
    }
    const submitForm = (e) => {
        e.preventDefault();
        const date = formatDate(startDate, endDate);
        const formData ={
            room: roomId,
            customer:2,
            date: date
        }
        console.log(formData);
        //post l'information dans le backend
        //refresh booking data
        // redirect to my booking page
    }
     return (
        <>
            <div className="flex">
                <form className="form" ref={formRef} onSubmit={submitForm}>
                    <DatePicker
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={setStartingDate}
                        minDate={addDays(new Date(), 1)}
                        maxDate={addDays(new Date(), 90)}
                        excludeDates={excludeDates()}
                        locale="fr"
                        showWeekNumbers
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Check in"
                    />
                    &#8594;
                    <DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        onChange={setEndingDate}
                        minDate={addDays(startDate, 1)}
                        maxDate={addDays(new Date(), 90)}
                        excludeDates={excludeDates()}
                        locale="fr"
                        showWeekNumbers
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Check out"
                        popperModifiers={{
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: false,
                                boundariesElement: 'viewport',
                            },
                        }}
                    />
                    {
                    isLoggedIn 
                    ? <input type='submit' value='Reserve' />
                    : <p className='back-login'><button onClick={auth}>Log-in</button></p>
                    }

                    <TotalAmount
                        roomPrice={roomPrice}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </form>
            </div>
            <RoomPrice price={roomPrice} />
        </>
    )
}
