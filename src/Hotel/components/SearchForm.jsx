import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchData, editCriteria } from "../../store/actions/filters/hotels";
import Slider from '../components/Search/Slider';
import DropdownInput from '../components/Search/DropdownInput';
import RatingFilter from '../components/Search/RatingFilter';
import SearchFormRadio from '../components/Search/SearchFormRadio';
import SearchBar from './Search/SearchBar';
class SearchForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //make an initial request. (The criteria object is in the redux store)
        //Objective: populate the dropdowns values with the response.metadata
        this.props.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        //if the criteria have changed, fetch data with new criteria
        //lodash.isEqual performs a DEEP comparison of objects
        if (!_.isEqual(prevProps.criteria, this.props.criteria)) {
            this.props.fetchData();
        }
    }

    render() {
        return (
            <>
                <Slider
                    type="budget"
                    label="Budget"
                    minName="price_min"
                    maxName="price_max"
                />
                {/*<SearchFormRadio />*/}
                <RatingFilter />
                <DropdownInput
                    label="Star"
                    name="star"
                    stateOptions={[
                        { key: "1", value: 1, text: "1 étoile" },
                        { key: "2", value: 2, text: "2 étoiles" },
                        { key: "3", value: 3, text: "3 étoiles" },
                        { key: "3", value: 4, text: "4 étoiles" },
                        { key: "3", value: 5, text: "5 étoiles" }
                    ]}
                />
            </>
        );
    }
}
SearchForm.propTypes = {
    criteria: PropTypes.object,
    fetchedData: PropTypes.bool,
    fetchData: PropTypes.func.isRequired,
    editCriteria: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        fetchedData: state.fetchedData,
        criteria: state.hotels.criteria
    };
};

export default connect(
    mapStateToProps,
    { fetchData, editCriteria }
)(SearchForm);
