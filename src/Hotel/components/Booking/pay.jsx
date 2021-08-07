import React from 'react'
import BookingDetail from './BookingDetail'

export default function PayHotel() {
    return (
        <div>
            <div className="container mt-14">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="p-3 bg-white shadow-lg">
                            <h1 className="text-semibold text-lg text-gray-700 mb-1">payment option</h1>
                            <div>
                                <label className="mt-3">
                                    <input type="radio" class="radio_animated ms-0" checked="" id="r_one" name="occupation" value="Working" required="" />
                                    debit card
                                </label>
                            </div>
                            <div>
                                <label className="mt-3">
                                    <input type="radio" class="radio_animated ms-0" checked="" id="r_one" name="occupation" value="Working" required="" />
                                    debit card
                                </label>
                            </div>
                            <div>
                                <label className="mt-3">
                                    <input type="radio" class="radio_animated ms-0" checked="" id="r_one" name="occupation" value="Working" required="" />
                                    debit card
                                </label>
                            </div>
                            <div>
                                <label className="mt-3">
                                    <input type="radio" class="radio_animated ms-0" checked="" id="r_one" name="occupation" value="Working" required="" />
                                    debit card
                                </label>
                            </div>
                            <button className="btn btn-primary">Make payment</button>
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
