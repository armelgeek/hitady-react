import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const VoyageSearchForm = () => {
    return (
        <form>
            <div className="row shadow-lg p-10">
                <div className="col-lg-3 col-md-6">
                    <div className="form-group">
                        <label className="fs-14 text-custom-black fw-500">Destination</label>
                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Destination and Hotel Name" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="fs-14 text-custom-black fw-500">Arrivé</label>
                                <div className="input-group group-form">
                                    <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="fs-14 text-custom-black fw-500">Départ</label>
                                <div className="input-group group-form">
                                    <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label className="text-custom-black fw-500">Chambres</label>
                                <div className="group-form">
                                    <select className="custom-select form-control">
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label className="text-custom-black fw-500">Adultes</label>
                                <div className="group-form">
                                    <select className="custom-select form-control">
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label className="text-custom-black fw-500">Enfants</label>
                                <div className="group-form">
                                    <select className="custom-select form-control">
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <label className="submit" />
                    <button type="submit" className="btn-first btn btn-primary full-width btn-height">Rechercher</button>
                </div>
            </div>
        </form>
    )
}
const SearchBar = () => {

    return (
        <div className="banner-tabs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs">
                            <ul className="list-none p-0 flex justify-center items-center border-0 flex-wrap  nav nav-tabs">
                                <li className="nav-item  text-center mb-0 mr-3">
                                    <a className="nav-link shadow-sm active active: border-solid border-yellow-600  text-primary border-0  " data-toggle="tab" href="#hotel">Voyages</a>
                                </li>
                                <li className="nav-item  text-center mb-0 mr-3 ">
                                    <a className="nav-link active: border-solid border-yellow-600  text-primary  border-0 " data-toggle="tab" href="#flights">Hotels</a>
                                </li>
                                <li className="nav-item  text-center mb-0 mr-3">
                                    <a className="nav-link active: border-solid border-yellow-600  text-primary  border-0 " data-toggle="tab" href="#cruise">Restaurants</a>
                                </li>
                                <li className="nav-item  text-center mb-0 mr-3">
                                    <a className="nav-link active: border-solid border-yellow-600  text-primary  border-0 " data-toggle="tab" href="#cars">Voitures</a>
                                </li>
                            </ul>
                            <div className="tab-content  border-solid border-yellow-600">
                                <div className="tab-inner">
                                    <VoyageSearchForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const Banner = () => {
    return (
        <><div className="w-100 h-banner bg-gray-300 bg-hitady relative">
            <div className="flex flex-col justify-center items-center h-100">
                <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-4xl">
                    <h1 class="text-5xl font-bold font-hitady text-white tracking-tight hero-title  sm:text-5xl sm:leading-none">
                        Découvrez en numérique les merveilles de
                        <span class="relative inline-block px-2 mt-3">
                            <div class="absolute inset-0 transform -skew-x-12 bg-gray-50"></div>
                            <span class="relative text-primary font-hitady"> vos destinations</span>
                        </span>
                    </h1>
                    <p class="text-base  text-white md:text-lg">
                        <span class="text-primary font-logo mr-1"> Hitady  </span>   est la première site internet de visite virtuelle Malagasy
                    </p>

                </div>
            </div>
        </div>
            <div>
                {/**
                 * <SearchBar />
                 * */}
            </div>
        </>
    );
};
export default Banner;
