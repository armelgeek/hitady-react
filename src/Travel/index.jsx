import React from 'react';
import Breadcrumb from '../components/custom/Breadcrumb'

const items = [
    { fr: 'Accueil', en: 'Home', to: '/' },
    { fr: 'Voyages', en: 'Travel', to: '/travel' },
];
const Banner = () => {
    return (
        <div className="w-100 h-96 relative shadow-lg">
            <div className="flex flex-col justify-center items-start bg-travel h-100">
                <div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="hero__caption">
                                    {/**   <h1 className="font-travel-h1">Trouvez votre  prochaine   <span className="relative">tournée !</span> </h1>
                                    <p>Where would you like to go?</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
const TravelCard = () => {
    return (
        <div className="col-lg-3 col-lg-4">

            <div class="destination-single ">
                <div class="destination-img bg-blue h-96  bg-travel">

                    <div class="destination-content">
                        <div class="content-left">
                            <h5>Paris</h5>
                            <small>8 Jun 2021 - 10 Jun 2021</small>
                        </div>
                        <div class="content-right">
                            <h5 className="text-primary">$639</h5>
                            <span> /personnes </span>
                        </div>
                    </div>
                    <div class="destination-btn">
                        <a href="#" >En savoir plus</a>
                    </div>
                </div>
            </div>
        </div>
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
