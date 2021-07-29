import React from 'react';

import { subDays, eachDayOfInterval } from 'date-fns';
import NumberFormat from 'react-number-format';
const TotalAmount = props => {
  const { roomPrice, startDate, endDate } = props;
  let totalNights = 0;
  let pricePerDay;

  if (!startDate || !endDate) return null;

  const totalPrice = eachDayOfInterval({
    start: startDate,
    end: subDays(endDate, 1),
  })
    .map(day => day.getDay(day))
    .map(day => {
        totalNights += 1;
        pricePerDay = roomPrice;
      return pricePerDay;
    })
    .reduce((sum, currentPrice) => {
      return sum + currentPrice;
    }, 0);

  return (
    <div className="booking-card__total">
    
          <span className="booking-card__total-text">
             <NumberFormat value={roomPrice} displayType={'text'} thousandSeparator={true} suffix={' Ar'} /> x {totalNights} nuit(s)
          </span>
          <span className="booking-card__total-text bold">Total : <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={' Ar'} /></span>

    </div>
  );
};

export default TotalAmount;
