import React, { PropTypes } from 'react';
import HotelItem from './HotelItem';
import { hotelData } from '../../data/hotels'
import SearchForm from './SearchForm';
const HotelList = () => {
    return (
        <div className="row">
            <div className="col-md-12  col-lg-3 col-sm-12">
                <SearchForm />
            </div>
            <div className="col-md-12 col-lg-9 col-sm-12">
                <div className="row">
                    {
                        hotelData.map((i, hotel) => (
                            <HotelItem />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default HotelList;
