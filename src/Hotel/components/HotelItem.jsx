import React, { PropTypes } from 'react';
import CardHotel from '../../components/custom/CardHotel'

const HotelItem = ({ id }) => {
    const item={
        id:1,
        url:'/public/hotels/1.jpg',
        name :'Karibo hotel ranomafana'
    }
    return (
        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
        <CardHotel item={item}/>
        </div>
    );
};
export default HotelItem;
