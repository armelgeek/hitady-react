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
            <div className="flex p-2 mb-2 gap-2 bg-primary">
                <span>{this.returnActiveFilterValue()}</span>
                <Icon className="mt-1" onClick={() => this.handleIconClick(objectKey, objectValue)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width="17px"
                        height="17px"
                        className="icons-hover"
                        fill="none"
                        stroke="#FFFF"
                        strokeLinejoin="round"
                        strokeWidth="3.7333333333333325px"
                    >
                        <title>drover_small_icons</title>
                        <g id="Layer_4" data-name="Layer 4">
                            <line
                                x1="34"
                                y1="34"
                                x2="6"
                                y2="6"
                                style={{
                                    fill: "none",
                                    stroke: "rgb(0, 30, 255)",
                                    strokeLinejoin: "round",
                                    strokeWidth: "3.73333px"
                                }}
                            />
                            <line
                                x1="34"
                                y1="6"
                                x2="6"
                                y2="34"
                                style={{
                                    fill: "none",
                                    stroke: "rgb(0, 30, 255)",
                                    strokeLinejoin: "round",
                                    strokeWidth: "3.73333px"
                                }}
                            />
                        </g>
                    </svg>
                </Icon>
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