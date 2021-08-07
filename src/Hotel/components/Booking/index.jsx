import React from 'react'
import BookingDetail from './BookingDetail'

export default function BookingHotel() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="p-3 bg-white shadow-lg">
                            <h1 className="text-semibold text-lg text-gray-700 mb-1">Traveller Information</h1>

                            <form>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col first-name">
                                            <label className="mb-1">first name</label>
                                            <input type="text" id="firstName" className="form-control border" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <label className="mb-1">last name</label>
                                            <input type="text" id="lastName" className="form-control border" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Email address</label>
                                    <input type="email" className="form-control border" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">Booking confirmation will be sent to
                                        this email ID.</small>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">contact info</label>
                                    <input type="text" id="contact" className="form-control border" placeholder="contact info" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1" className="mb-1" htmlFor="exampleFormControlTextarea1">special request</label>
                                    <textarea className="form-control border" id="exampleFormControlTextarea1" rows={3} placeholder="e.g.. early check-in, airport transfer" defaultValue={""} />
                                </div>

                                <div className="submit-btn">
                                    <button className="btn btn-primary" type="button">pay now</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-lg-5 relative">
                        <BookingDetail />
                    </div>

                </div>
            </div>
        </div>
    )
}
