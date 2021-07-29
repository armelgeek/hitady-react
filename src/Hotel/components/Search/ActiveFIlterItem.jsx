import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
class ActiveFIlterItem extends Component {
    render() {
        return (
            <div>

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