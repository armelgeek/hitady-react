import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
const ActivityTourCard = () => {
    return (
        <div class="col-xl-6 col-md-3 col-sm-6 mt-3">
            <div class="activity-card pt-2 pl-3 pr-3 pb-2 style-two d-flex">
                <div class="activity-img position-relative">
                    <img src="activity/activity-h2.jpeg" alt="" />
                    <span class="activity-hover-icon"><a href="#"><i class="fas fa-heart"></i></a></span>
                </div>
                <div class="activity-text">
                    <div class="activity-tilte-head headline ul-li">
                        <h5>
                            <a href="#">
                                Vatican Museum Private Tour
                            </a>
                        </h5>
                        <div class="activity-features">
                            <div class="icon-text">
                                <div class="icon"><i class="fas fa-map-marker-alt"></i></div>London
                            </div>
                            <div class="icon-text">
                                <div class="icon"><i class="fas fa-clock"></i></div> à 45 km de la centre ville
                            </div>

                        </div>
                        {<div class="flex flex-row justify-end pr-4 m-0">
                            <div class="detail-btn">
                                <a href="#"> <i class="fas fa-angle-right"></i></a>
                            </div></div>}
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
            </div>
        </div>
    )
}
export default class ActivityIndex extends Component {


    render() {
        return (
            <>
                <Banner />
                <div className="container mt-4">
                    <div className="row">
                        <ActivityTourCard />
                        <ActivityTourCard />
                        <ActivityTourCard />
                        <ActivityTourCard />
                        <ActivityTourCard />
                    </div>
                </div >
            </>
        );
    }
}
