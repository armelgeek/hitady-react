import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { roomsData, bookingData } from '../data/hotels.js'
import BookingCard from './components/BookingCard.jsx';
import ItemsCarousel from 'react-items-carousel';
import Banner from './components/partials/Banner.jsx';
import HotelInformation from './components/partials/HotelInformation.jsx';
import Description from './components/partials/Description.jsx';
import Chambres from './components/partials/Chambres.jsx';
import Gallery from './components/partials/Gallery.jsx';
import Localisation from './components/partials/Localisation.jsx';
import Reservation from './components/partials/Reservation.jsx';


const DetailHotel = () => {

	const { hotelId } = useParams();
	useEffect(() => {
		//getDataRoom(hotelId);
		//	setBookingData()
	}, [])


	return (
		<>
			<Banner />
			<HotelInformation />
			<div className="container mt-12 mb-9">
				<div className="row">
					<div className="col-lg-8">
						<Description />
						<Chambres />
						<Gallery />
					</div>
					<div className="col-lg-4">
						<Localisation />
						<section id="carte" className="mb-24">
							<h1 className="font-resto text-md section-etablissement-title">Send us an email</h1>
							{/**<BookingCard
								roomPrice={currentHotel.price}
								bookingData={bookingData}
								roomId={hotelId}
							/>*/}
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
export default DetailHotel;
