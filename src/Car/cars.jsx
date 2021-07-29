import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCard'
import { carsData } from '../data/cars.js'
const CarList = () => {
	const [cars, setCars] = useState([]);
	const getAllCars = () => {
		setCars(carsData);
	}
	useEffect(() => {
		getAllCars();
	}, [])
	return (
		<>
			{
				cars.map(car => (
					<>
						<CarCard key={car.id} car={car} />
					</>
				))
			}
		</>
	);
};

export default CarList;
