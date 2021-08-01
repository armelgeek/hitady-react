import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HotelItem from "../HotelItem";
import "../../../styles/SearchResults.css";
const SearchResults = (props) => {
    return (
         <div className="row">
          <div className="col-12 mb-3 ">
           	{ props.fetchedData && 'loading .....'}
           	</div>
			{
				props.hotels.map((hotel,i) => (
	                <div className="col-md-6 col-lg-4 col-sm-12 mb-3" key={i}>
						<div className="card ">
		                   	<div className="relative bg-gray-500 bg-repeat bg-center bg-cover hover:bg-opacity-80  w-100  h-56">
		             			<div className="absolute bottom-0 -left-4">
		             				<ul>
		             					<li className="bg-white h-8 w-8 mb-2 flex justify-center items-center bg-opacity-20">1</li>
		             					<li className="bg-white h-8 w-8 mb-2 flex justify-center items-center  bg-opacity-20">1</li>
		             					<li className="bg-white h-8 w-8 mb-2 flex justify-center items-center  bg-opacity-20">1</li>
		             				</ul>
		             			</div>
		             			<div className=" absolute px-2 rounded text-white  bg-primary bg-opacity-100 bottom-3 right-3">
		             				<p>Hotel </p>
		             			</div>
		          			</div>
	                    <div className="card-body">
	                    	<h5 className="card-text text-primary">{hotel.name}</h5>
	                    	<ul>
            					<li> 
            						<p>
              							<span className="la la-map-marker text-primary"></span>
              								Fort George, New York, NY, USA
              						</p>
              					</li> 
              					<li> 
	            					<p>
	              						<span className="la la-map-marker"></span>
	              							5km du centre ville
	              					</p>
              					</li>                                             
             				</ul> 
                   		</div>
                    </div>
                    </div>
                ))
           	}
         </div>
    );
};
SearchResults.propTypes = {
    cars: PropTypes.array,
    fetchedData: PropTypes.bool
};

const mapStateToProps = state => {
	console.log(state);
    return {
        hotels: state.hotels.response,
        fetchedData: state.hotels.fetchedData
    };
};

export default connect(
    mapStateToProps,
    null
)(SearchResults);
