import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
const CardImage = ({ src }) => {
    return (
    	<Link  to={{
            pathname: `/rooms`
          }} >
         <div style={{ backgroundImage: src }}
          className="relative bg-gray-500 bg-repeat bg-center bg-cover hover:bg-opacity-80  w-100  h-56">
        
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
       
        </Link>
    );
};


const CardHotel = ({  item }) => {
    return (
        <div class="card ">
         <CardImage src={item.url}/>
          <div className="card-body">
            <Link  to={{
            pathname: `/rooms`
          	}} >
          		<h5 className="card-text text-primary">{item.name}</h5>
          	</Link>
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
        <div className="card-footer">
        	<div className="flex flex-col justify-center items-center">
        		<div className="">A partir de  </div>
        		<div className="flex text-primary relative"><h4>3 000 Ar </h4><small class="absolute bottom-1 -right-8">/nuit</small> </div>
        	</div>
        </div>
        </div>
    );
};


export default CardHotel;
