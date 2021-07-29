import React from 'react';
import { Link } from 'react-router-dom';
const CarCard = ({ car }) => {
  return (
    <div className="flex flex-row">
      <Link to={{
        pathname: `/car/${car.id}`,
        state: { carID: car.id },
      }}
      >
        <p>{car.id}</p>
        <p>{car.name}</p>
        <p>{car.price}</p>
      </Link>
    </div>
  );
};

export default CarCard;
