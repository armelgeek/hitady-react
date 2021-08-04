import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { roomsData, bookingData } from '../data/hotels.js'
import BookingCard from './components/BookingCard.jsx';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const DetailHotel = () => {

	const { TabPane } = Tabs;
	const { hotelId } = useParams();
	const [currentHotel, setCurrentHotel] = useState({});
	//const [bookingData, setBookingData] = useState([]);
	useEffect(() => {
		getDataRoom(hotelId);
		//	setBookingData()
	}, [])
	const getDataRoom = (id) => {
		setCurrentHotel({
			id: 1,
			name: 'ceci est le room',
			price: 150000
		});
	}
	function callback(key) {
		console.log(key);
	}

	return (
		<>
			<div className="container">
				<Tabs defaultActiveKey="1" onChange={callback}>
					<TabPane tab="Déscription" key="1">
						Content of Tab Pane 1
					</TabPane>
					<TabPane tab="Chambres & suites " key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="Tab 3" key="3">
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
			</div>

			<div className="flex flex-row flex-grow-2">
				<div className="flex-1">
					<h3>Déscription</h3>
					<p>{currentHotel.name}</p>
				</div>
				<div className="flex-1">
					{/*<BookingCard
						roomPrice={currentRoom.price}
						bookingData={bookingData}
						roomId={roomId}
					/>*/}
				</div>
			</div>
		</>
	);
};
export default DetailHotel;
