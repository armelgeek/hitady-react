import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
const CarItem = () => {
    return (
        <div className="col-lg-4">

            <div class="car-wrap rounded shadow-lg">
                <div class="img rounded d-flex align-items-end img-car" >
                </div>
                <div class="text">
                    <h2 class="mb-0"><a href="#" className="text-light">Mercedes Grand Sedan</a></h2>
                    <div class="d-flex mb-3">
                        <span class="text-primary">Cheverolet</span>
                        <p class="price ml-auto">$500 <span className="text-white">/day</span></p>
                    </div>
                    <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#" class="btn btn-secondary py-2 ml-1">Details</a></p>
                </div>
            </div>
        </div>
    )
}
export default class CarIndex extends Component {


    render() {
        return (
            <div className="container mt-4">
                Un moyen rapide et facile de louer une voiture
                <div className="row">
                    <CarItem /><CarItem /><CarItem /><CarItem /><CarItem />
                </div>
            </div >
        );
    }
}
