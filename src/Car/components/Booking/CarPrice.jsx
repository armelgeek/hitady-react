import React from 'react'
import NumberFormat from 'react-number-format';
export default function CarPrice({ price }) {
    return (
        <div>
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} suffix={'Ar'} />
        </div>
    )
}
