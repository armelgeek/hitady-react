import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCriteria } from "../../../store/actions/filters/hotels";
import { Icon } from 'semantic-ui-react';
class ActiveFilterItem extends Component {
    handleIconClick = (objectKey, objectValue) => {
        this.props.editCriteria(objectKey, "");
    };
    capitaliseFirstLetter = objectValue => {
        return (
            objectValue.substring(0, 1).toUpperCase() +
            objectValue.substring(1, objectValue.length)
        );
    };
    returnActiveFilterValue = () => {
        const objectValue = Object.values(this.props.data)[0];
        const objectKey = Object.keys(this.props.data)[0];

        //if objectKey's value is expected to be a string, capitalise first letter then return objectvalue
        if (typeof objectValue === "string") {
            return this.capitaliseFirstLetter(objectValue);
        }


        if (typeof objectValue === "number") {

            //slider min and max values
            if (objectKey === "price_min") {
                return `Plus de $${objectValue}`;
            }
            if (objectKey === "price_max") {
                return `Sous $${objectValue}`;
            }
            if (objectKey === "star") {
                return `${objectValue} étoile(s)`;
            }
            if (objectKey === "nb_weeks") {
                return `${objectValue} week(s)`;
            }
        }

    };

    render() {
        const objectValue = Object.values(this.props.data)[0];
        const objectKey = Object.keys(this.props.data)[0];
        console.log(typeof objectValue);

        return (
            <div className="flex p-1 mb-2  text-white gap-2 bg-primary rounded-full">
                <span className="pl-2 ">{this.returnActiveFilterValue()}</span>
                <i className="mt-1 cursor-pointer  mr-2 fa fa-times" onClick={() => this.handleIconClick(objectKey, objectValue)}>

                </i>
            </div>
        )
    }
}
ActiveFilterItem.propTypes = {
    editCriteria: PropTypes.func.isRequired,
    data: PropTypes.object
};
export default connect(
    null,
    { editCriteria }
)(ActiveFilterItem);