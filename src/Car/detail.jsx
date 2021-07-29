import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BookingCard from './components/BookingCard.jsx';
import { carsData, bookingData } from '../data/cars.js'
const DetailCar = () => {
	const { carId } = useParams();
	const [currentCar, setCurrentCar] = useState({});
	const history = useHistory();
	//const [bookingData, setBookingData] = useState([]);
	useEffect(() => {
		getDataCar(carId);
		//	setBookingData()
	}, [])
	const getDataCar = (id) => {
		setCurrentCar({
			id: 1,
			name: 'Car 1',
			price: 250000
		});
	}
	//Make an order
	const onOrderHandler = useCallback((order) => {
		console.log(order);
		history.push(`/orders`);
		//	setIsLoading(true);
		/*	axios.post('/orders', order,
				{ 'Content-Type': 'application/json' })
				.then(res => {
					setIsLoading(false);
					history.push(`/my-orders/${userId}`)
				}).catch(err => {
					setIsLoading(false);
					console.log(err);
				})*/
	}, []);

	return (
		<>
			<div className="flex flex-row flex-grow-2">
				<div className="flex-1">
					<h3>Déscription</h3>
					<p>{currentCar.name}</p>
				</div>
				<div className="flex-1">
					<BookingCard
						carPrice={currentCar.price}
						bookingData={bookingData}
						carId={carId}
						onOrderHandler={onOrderHandler}
					/>
				</div>
			</div>
		</>
	);
};
export default DetailCar;
