import React, { PropTypes } from 'react';
import HotelList from './components/HotelList';
import Breadcrumb from '../components/custom/Breadcrumb'
import SearchForm from './components/SearchForm';
import Slider from './components/Search/Slider';
import SearchSummary from './components/Search/SearchSummary';
const items = [
    { fr: 'Accueil', en: 'Home', to: '/' },
    { fr: 'Hotels', en: 'Hotels', to: '/hotels' },
];
const HotelCard = () => {
    return (
        <div className="col-lg-4">
            <div class="card card-span rounded-3 mb-3"><img class="rounded-3 " src="/hotels/4.png" alt="..." />
                <div class="card-body ps-3">
                    <h5 class="fw-bold text-1000 text-truncate mb-2">Roosevelt Hotel</h5>
                    <div>
                        <span class="text-primary me-2">
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="text-primary">Burger Arena</span>
                        <div >
                            <span class="text-primary me-2">
                                <i class="far fa-clock"></i>
                            </span>
                            <small class="text-gray">A 5km de la centre ville</small>
                        </div>

                    </div>
                </div>
                <div class="card-footer flex justify-between ">
                    <div>
                        <span className="block"> A partir de</span> <h5 >100 000 Ar / <span >nuits </span></h5>
                    </div>
                    <div>
                        <div class="detail-btn mt-2">
                            <a href="#" className="text-gray"><i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const Banner = () => {
    return (
        <>
            <div className="w-100  pt-24 pb-24 bg-gray-800  relative overflow-hidden">

                <div className="flex flex-col justify-center items-center h-100">
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-4xl">
                        <h1 class="text-5xl font-bold font-hitady text-white tracking-tight hero-title  sm:text-5xl sm:leading-none">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </h1>
                        <p className="text-white pl-5 pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus saepe magnam reiciendis ab, neque aspernatur a nisi harum distinctio porro eius, illo delectus ipsum eveniet corrupti doloremque aut excepturi!</p>
                        <div className="flex flex-row justify-center">
                            <div className="detail-btn">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/**
                 * <SearchBar />
                 * */}
            </div>
        </>
    )
}
const Hotels = () => {
    return (
        <>
            <Banner />

            <div className="container mt-3">

                <div className="row">
                    <div className="col-lg-3 h-auto bg-white shadow-sm rounded-md">
                        <div className="mt-4 pl-2 pr-2 relative">
                            <input type="text" className="active:border-0 border form-control" placeholder="Rechercher ici ...." />
                            {/*<i className="fas fa-search absolute top-1/2 text-primary left-10"></i>*/}
                        </div>
                        <div className="mt-6 pl-2 pr-5">
                            <div className="flex flex-row justify-between">
                                <h6 className="font-bold">Filtrer</h6>
                                <i className="fa fa-filter"></i>
                            </div>
                        </div>
                        <div class="mt-4 pl-2 pr-5">
                            <h6 className="block-title">
                                Destinations
                            </h6>
                            <div className="mt-3">
                                <div>
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">Tous</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">Fianrantsoa</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">Ranomafana</label>
                                </div>
                            </div>
                            <h6 className="block-title">
                                Facility
                            </h6>
                            <div className="mt-3">
                                <div>
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">restaurant</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">Wifi</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">spa & salon</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">restaurant</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">Wifi</label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">spa & salon</label>
                                </div>
                            </div>
                            <h6 className="block-title">
                                Etoiles
                            </h6>
                            <div className="mt-3">
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" className="form-check-input ml-3" />
                                    <label className="form-check-label ml-2">
                                        <i class="fas fa-star text-warning mr-1"></i>
                                        <i class="fas fa-star text-warning mr-1"></i>
                                    </label>
                                </div>
                            </div>
                            <h6 className="block-title">
                                Price Range
                            </h6>
                            <div className="mt-2">
                                <Slider
                                    type="budget"
                                    label="Budget"
                                    minName="price_min"
                                    maxName="price_max"
                                />
                            </div>
                            <div className="mt-9">
                                <div class="help-us mb-30 p-4 bg-primary">
                                    <h4 className="text-white">Besoin d'aide ?</h4>
                                    <p className="text-white">Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
                                    <a class="btn bg-white font-bold" href=""><i class="fas fa-phone-alt"></i> Contact Us</a> </div>
                            </div>
                            {/** <a className="btn btn-primary btn-block">Besoin d'aide ?</a>
                           
                        
                            */}
                        </div>

                    </div>
                    <div className="col-lg-9">
                        <div className="row mb-3">
                            <SearchSummary />
                        </div>
                        <div className="row">
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                            <HotelCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hotels;
