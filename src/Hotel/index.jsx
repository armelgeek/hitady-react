import React, { PropTypes } from 'react';
import HotelList from './components/HotelList';
import Breadcrumb from '../components/custom/Breadcrumb'
import SearchForm from './components/SearchForm';
const items = [
    { fr: 'Accueil', en: 'Home', to: '/' },
    { fr: 'Hotels', en: 'Hotels', to: '/hotels' },
];
const Hotels = () => {
    return (
        <div className="container">
            <Breadcrumb items={items} />
            <HotelList />
        </div>
    );
};
export default Hotels;
