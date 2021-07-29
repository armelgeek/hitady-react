import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import { editCriteria, resetCriteria } from "../store/actions/fetchData";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/Search/SearchResults";
import SearchSummary from "./components/Search/SearchSummary";

export class CarIndex extends Component {
    state = {
        hireType: "Go To PCO Mode"
    };

    handleClick = () => {
        //fetch new kind of data (PCO or Consumer related) with new vehicle_type value
        //clear all activefilters from the previous hireType mode ('PCO' mode/hireType)
        if (this.state.hireType === "Go To Consumer Mode") {
            this.setState({ hireType: "Go To PCO Mode" }, () => {
                this.props.resetCriteria(defaultCriteria);
            });
        }

        if (this.state.hireType === "Go To PCO Mode") {
            this.setState({ hireType: "Go To Consumer Mode" }, () => {
                //if user selected sub_type or city_jurisdiction (which are only unique to PCO version)
                //we want to clear any PCO related fields and send backend only Consumer valid fields
                this.props.resetCriteria(defaultCriteriaPCO);
            });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <SearchForm />
                    </div>
                    <div className="col-md-8">
                        <SearchSummary />
                        <SearchResults />
                    </div></div>
            </div >
        );
    }
}

CarIndex.propTypes = {
    resetCriteria: PropTypes.func.isRequired
};

export default connect(
    null,
    { editCriteria, resetCriteria }
)(CarIndex);
