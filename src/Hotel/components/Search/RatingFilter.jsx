import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Form, Radio, Header } from "semantic-ui-react";
import { editCriteria }  from "../../../store/actions/filters/hotels";

class RatingFilter extends Component {
    state = {
        value: "3"
    };
    handleChange = (e) => {
        this.setState({ value : e.target.value}, () => {
            switch(this.state.value){
                case "1":
                    this.props.editCriteria({ star: 1 });
                break;
                case "2":
                    this.props.editCriteria({ star: 2 });
                break;
                case "3":
                    this.props.editCriteria({ star: 3 });
                break;
                case "4":
                    this.props.editCriteria({ star: 4 });
                break;
                case "5":
                    this.props.editCriteria({ star: 5 });
                break;
                default:
                    this.props.editCriteria({ star: 3 });
                break;
            }
        });
    };


    render() {
        return (
            <>
                <div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Etoiles</h5>
    
        <label class="custom-control flex custom-radio">
          <input type="radio" name="rating" value="5" onChange={this.handleChange}  class="custom-control-input"/>
          <div class="custom-control-label text-warning"> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
          </div>
        </label><br/>

        <label class="custom-control flex custom-radio">
          <input type="radio" name="rating" value="4" onChange={this.handleChange}  class="custom-control-input"/>
          <div class="custom-control-label text-warning"> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> 
          </div>
        </label><br/>

        <label class="custom-control flex custom-radio">
          <input type="radio" name="rating" value="3" onChange={this.handleChange}  class="custom-control-input"/>
          <div class="custom-control-label text-warning"> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
          </div>
        </label><br/>

        <label class="custom-control  flex custom-radio">
          <input type="radio"name="rating" value="2" onChange={this.handleChange} class="custom-control-input"/>
          <div class="custom-control-label text-warning"> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
          
          </div>
        </label>

    </div>   
    </div>   
            </>
        );
    }
}

RatingFilter.propTypes = {
    editCriteria: PropTypes.func.isRequired
};

export default connect(
    null,
    { editCriteria }
)(RatingFilter);
