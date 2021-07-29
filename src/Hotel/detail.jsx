import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { roomsData , bookingData  } from '../data/hotels.js'
import BookingCard from './components/BookingCard.jsx';
const DetailRoom = () => {
	const { roomId } = useParams();
	const [currentRoom, setCurrentRoom] = useState({});
	//const [bookingData, setBookingData] = useState([]);
	useEffect(() => {
		getDataRoom(roomId);
	//	setBookingData()
	}, [])
	const getDataRoom = (id) => {
		setCurrentRoom({
			id: 1,
			name: 'ceci est le room',
			price: 150000
		});
	}
	return (
		<>
			<div className="flex flex-row flex-grow-2">
				<div className="flex-1">
					<h3>Déscription</h3>
					<p>{currentRoom.name}</p>
				</div>
				<div className="flex-1">
					<BookingCard
						roomPrice={currentRoom.price}
						bookingData={bookingData}
						roomId = {roomId}
					/>
				</div>
			</div>
		</>
	);
};
export default DetailRoom;
