import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCriteria, fetchData } from "../../../store/actions/filters/hotels";
import ActiveFilterItem from './ActiveFilterItem'
class SearchSummary extends Component {
    state = {
        value: { order_direction: "asc", order_by: "recommended" },
        options: [
            {
                key: "price_low_to_high",
                value: { order_direction: "asc", order_by: "price" },
                text: "Price - Low To High"
            },
            {
                key: "price_high_to_low",
                value: { order_direction: "desc", order_by: "price" },
                text: "Price - High To Low"
            },
            {
                key: "distance",
                value: { order_direction: "asc", order_by: "distance" },
                text: "Distance - Close To Far"
            },
            {
                key: "recommended",
                value: { order_direction: "asc", order_by: "recommended" },
                text: "Recommended"
            }
        ]
    };
    showNumberOfCarsAvailable = () => {
        return this.props.fetchedData
            ? "Recherche des hotels"
            : `hôtels disponibles`;
        // ${this.props.metadata.total_count} 
    };
    handleValueChange = (e) => {
        this.setState({ value: e.target.value }, () => {
            this.props.editCriteria(null, e.target.value, null, null);
        });
    };
    renderActiveFilters = () => {
        if (this.props.isCriteriaPristine) {
            // if form is still pristine, don't show active filters
            return;
        }
        let relevantCriteriaKeys = Object.keys(this.props.criteria);
        return relevantCriteriaKeys.map(key => {
            if (key !== "page" && key !== "rolling" && key !== "max_price") {
                return (
                    <ActiveFilterItem
                        data={{ [key]: this.props.criteria[key] }}
                        key={key}
                    />
                );
            }
        });
    }
    render() {
        return (
            <>

                <div className="col-lg-9 mb-3 mt-2">
                    {this.showNumberOfCarsAvailable()}
                </div>
                <div className="col-lg-3 mb-3">
                    <select className="form-control w-full"
                        name="order_by"
                        value={this.state.value}
                        onChange={(e) => {
                            this.handleValueChange(e);
                        }}
                    >
                        {this.state.options.map(v => (
                            <option value={v.key} >{v.text}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-row gap-2">
                    {this.renderActiveFilters()}
                </div>
            </>
        )
    }
}
SearchSummary.propTypes = {
    criteria: PropTypes.object,
    metadata: PropTypes.object,
    fetchedData: PropTypes.bool,
    fetchData: PropTypes.func.isRequired,
    editCriteria: PropTypes.func.isRequired,
    isCriteriaPristine: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        metadata: state.hotels.response.metadata,
        fetchedData: state.hotels.fetchedData,
        criteria: state.hotels.criteria,
        isCriteriaPristine: state.hotels.isCriteriaPristine
    };
};

export default connect(
    mapStateToProps,
    { editCriteria, fetchData }
)(SearchSummary);
