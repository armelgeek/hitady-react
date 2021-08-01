import React from 'react';
import Breadcrumb from '../components/custom/Breadcrumb'
import TravelCard from './components/TravelCard'
const items =[
    { fr: 'Accueil', en :'Home', to: '/'},
    { fr: 'Voyages', en :'Travel', to: '/travel'},
];
const Banner = () =>{
    return (
<div class="">
                        <div class="row">
                            <div class="col-xl-9 col-lg-9 col-md-9">
                                <div class="hero__caption">
                                    <h1 className="font-travel-h1">Find your <span className="relative">Next tour!</span> </h1>
                                    <p>Where would you like to go?</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
    )
}
const TravelList = () => {
    return (
   		<>
            <Banner/>
            <div className="container">
            <div className="row">
                <TravelCard />
            </div>
            </div>
        </>
    )
};

export default TravelList;
