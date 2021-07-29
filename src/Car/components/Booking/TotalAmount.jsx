import React from 'react';

import { subDays, eachDayOfInterval } from 'date-fns';
import NumberFormat from 'react-number-format';
const TotalAmount = props => {
  const { carPrice, startDate, endDate } = props;
  let totalDays = 0;
  let pricePerDay;

  if (!startDate || !endDate) return null;

  const totalPrice = eachDayOfInterval({
    start: startDate,
    end: subDays(endDate, 1),
  })
    .map(day => day.getDay(day))
    .map(day => {
      totalDays += 1;
      pricePerDay = carPrice;
      return pricePerDay;
    })
    .reduce((sum, currentPrice) => {
      return sum + currentPrice;
    }, 0);

  return (
    <div>

      <span>
        <NumberFormat value={carPrice} displayType={'text'} thousandSeparator={true} suffix={' Ar'} /> x {totalDays} jour(s)
      </span>
      <span>Total : <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={' Ar'} /></span>

    </div>
  );
};

export default TotalAmount;
