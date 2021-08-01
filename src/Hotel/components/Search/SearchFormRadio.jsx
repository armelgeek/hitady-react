import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Form, Radio, Header } from "semantic-ui-react";
import { editCriteria }  from "../../../store/actions/filters/hotels";

class SearchFormRadio extends Component {
    state = {
        value: ""
    };
    handleChange = (e) => {
        this.setState({ value : e.target.value}, () => {
            if (this.state.value === "commit") {
                let obj = { rolling: false, nb_weeks: 2 };
                this.props.editCriteria(obj);
            } else {
                let obj = { rolling: true, nb_weeks: 1 };
                this.props.editCriteria(obj);
            }
        });
    };


    render() {
        return (
            <>
                        <h3>Radio test</h3>
                             <label>
                                radio 1 
                                <input type="radio" name="radioGroup" value="rolling" checked={this.state.value === "rolling"}
                                onChange={this.handleChange} />
                            </label>
                            <label>
                               radio 2 
                                <input type="radio" name="radioGroup" value="commit" checked={this.state.value === "commit"}
                                onChange={this.handleChange} />
                            </label>        
            </>
        );
    }
}

SearchFormRadio.propTypes = {
    editCriteria: PropTypes.func.isRequired
};

export default connect(
    null,
    { editCriteria }
)(SearchFormRadio);
