import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
const CarItem = () => {
    return (
        <div className="col-lg-3">
            <div class="card card-span rounded-3 mb-3">
                <div class="h-48 img-car">

                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center"><img class="img-fluid" width="32" src="restaurants/logo/logo1.png" alt="" />
                        <div class="flex-1 ms-3">
                            <h5 class="fw-bold text-1000 text-truncate mb-2">Mercedez Bens</h5><span class="text-primary fs--1 me-1"><i class="fas fa-map-marker-alt"></i></span><span class="mb-0 text-primary">Ambozontany</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer flex justify-between ">
                    <div>
                        <span className="block"> A partir de</span> <h6>1 000 000 Ar / <span >jour(s) </span></h6>
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
        <div className="w-100 h-96 relative shadow-lg">
            <div className="flex flex-col justify-center items-start bg-car h-100">
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
export default class CarIndex extends Component {


    render() {
        return (
            <>
                <Banner />
                <div className="container mt-4">
                    <div className="row">
                        <CarItem /><CarItem /><CarItem /><CarItem /><CarItem />
                    </div>
                </div >
            </>
        );
    }
}
