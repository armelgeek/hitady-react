import React, { PropTypes } from 'react';

const SearchRoom = ({ classNameName }) => {
    return (
       <div class="full-row hotel-search-form py-4" >
          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <form action="#" className="w-100" method="post">
                                <div className="row">
                                    <div id="datepairExample" className="col-lg-4 col-sm-6">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-sm-6">
                                                <label className="text-white">Arrival Date</label>
                                                <input type="text" name="date1" className="date start form-control" placeholder="MM/DD/YYYY"/>
                                            </div>
                                            <div className="form-group col-lg-6 col-sm-6">
                                                <label className="text-white">Departure Date</label>
                                                <input type="text" name="date2" className="date end form-control" placeholder="MM/DD/YYYY"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-2 col-sm-6">
                                        <label className="text-white">Rooms</label>
                                        <div className="quantity">
                                            <input type="number" className="form-control" min="1" max="50" step="1" value="1"/>
                                            <div className="quantity-nav">
                                            	<div className="quantity-button quantity-up bg-primary">+</div>
                                            	<div className="quantity-button quantity-down bg-primary">-</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-2 col-sm-6">
                                        <label className="text-white">Guest</label>
                                        <div className="quantity">
                                            <input type="number" className="form-control" min="1" max="50" step="1" value="1"/>
                                            <div className="quantity-nav">
                                            	<div className="quantity-button quantity-up bg-primary">+</div>
                                            	<div className="quantity-button quantity-down bg-primary">-</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-2 col-sm-6">
                                        <label className="text-white">Room Type</label>
                                        <select className="selectpicker form-control">
                                            <option>Normal</option>
                                            <option>Single</option>
                                            <option>Family</option>
                                            <option>Luxury</option>
                                            <option>Honeymoon</option>
                                            <option>Duplex Room</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-2 col-sm-6">
                                     <label></label>
                                        <input type="submit" className=" btn btn-primary w-100 mt-30" value="Check Now"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         
    );
};

export default SearchRoom;
