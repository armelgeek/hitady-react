import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { editCriteria }  from "../../../store/actions/filters/hotels";
import "../../../styles/DropdownInput.css";

class DropdownInput extends Component {
    state = {
        value: null
    };

    componentDidMount() {
        //the user should see the first option's value. in most cases 'Any'.
        this.setState({ value: this.props.stateOptions[0].value });
    }

    componentDidUpdate(prevProps, prevState) {
        //is DropdownInput's name found in the criteria object ? show 'Any' or the first dropdown option's value
        //to the user
        //this is done so that when we delete an ActiveFilterItem, we want its related DropdownInput value to
        //change accordingly
        if (
            !this.props.criteria.hasOwnProperty(this.props.name) &&
            prevProps !== this.props
        ) {
            this.setState({ value: this.props.stateOptions[0].value });
        }
    }

    handleValueChange = (e) => {
        //we do not want to send the 'Any' value to the backend as it will return no results
        //we want to send "" instead but show 'Any' to the user
        if (e.target.value === "Any")
            this.setState({ value: "Any" }, () => {
                this.props.editCriteria(e.target.name, "");
            });
        else
            this.setState({ value: e.target.value }, () => {
                this.props.editCriteria(e.target.name, +e.target.value);
            });
    };

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <select className="form-control" 
                    value={this.state.value}
                    name={this.props.name}
                    disabled={this.props.disabled} onChange={(e) => {
                        this.handleValueChange(e);
                    }}
                    sel>
                    {this.props.stateOptions.map(v =>(
                        <option  value={v.value} >{v.text}</option>
                    ))}

                </select>
                 {/*
<Dropdown
                    value={this.state.value}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    onChange={(e, data) => {
                        this.handleValueChange(e, data);
                    }}
                    selection
                    placeholder="State"
                    options={this.props.stateOptions}
                />
                
                 */}
            </div>
        );
    }
}

DropdownInput.propTypes = {
    criteria: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    stateOptions: PropTypes.array.isRequired,
    editCriteria: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        criteria: state.hotels.criteria
    };
};

export default connect(
    mapStateToProps,
    { editCriteria }
)(DropdownInput);
