import React from 'react';

const TravelCard = () => {
    return (
        <>
        	<div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-place mb-30 border-0">
                            <div class="place-img">
                                <img src="travels/travel.jpg" className="w-100" alt=""/>
                            </div>
                            <div class="place-cap">
                                <div class="place-cap-top">
                                    <h3 className="text-danger"><a href="#">The Dark Forest Adventure</a></h3>
                                    <p class="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div class="place-cap-bottom">
                                    <ul>
                                        <li><i class="far fa-clock"></i>3 Days</li>
                                        <li><i class="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
};
export default TravelCard;
