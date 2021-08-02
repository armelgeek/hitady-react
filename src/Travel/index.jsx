import React from 'react';
import Breadcrumb from '../components/custom/Breadcrumb'
import TravelCard from './components/TravelCard'
const items = [
    { fr: 'Accueil', en: 'Home', to: '/' },
    { fr: 'Voyages', en: 'Travel', to: '/travel' },
];
const Banner = () => {
    return (
        <div className="w-100 h-screen relative shadow-lg">
            <div className="flex flex-col justify-center items-start bg-travel h-100">
                <div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="hero__caption">
                                    <h1 className="font-travel-h1">Trouvez votre  prochaine   <span className="relative">tournée !</span> </h1>
                                    <p>Where would you like to go?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
const TravelList = () => {
    return (
        <>
            <Banner />
            <div className="container mt-7">
                <div className="row">
                    <TravelCard />
                    <TravelCard />
                    <TravelCard />
                    <TravelCard />
                </div>
            </div>
        </>
    )
};

export default TravelList;
