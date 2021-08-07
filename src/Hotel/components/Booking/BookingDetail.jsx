import React from 'react'

export default function BookingDetail() {
    return (
        <div className="p-4 bg-white shadow-lg">
            <h2 className="mb-3">booking summery</h2>
            <div class="row">
                <div class="col-6">
                    <div class="up">
                        <h6 className="mb-1 font-semibold">check in</h6>
                        <p className="mb-1 text-gray-700">tue, 18 sep 2019</p>
                    </div>
                    <div class="down">
                        <h6 className="mb-1 font-semibold">check in time</h6>
                        <p className="mb-1 text-gray-700">2.00 pm</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="up">
                        <h6 className="mb-1 font-semibold">check out</h6>
                        <p className="text-gray-700 mb-1">fri, 21 sep 2019</p>
                    </div>
                    <div class="down">
                        <h6 className="mb-1 font-semibold">check out time</h6>
                        <p className="text-gray-700 mb-1">12.00 pm</p>
                    </div>
                </div>
                <div className="col-lg-12 pt-3 pb-3">
                    <div className="flex w-100 mt-2  pt-2 items-center border">

                        <h6 class="mb-0">2 guest, 1 deluxe room, 3 night</h6>
                    </div>
                </div>
                <div className="col-lg-12 pt-1 pb-1">
                    <h6 className="font-semibold">payment details</h6>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td>base price</td>
                                <td>$2510</td>
                            </tr>
                            <tr>
                                <td>promo discount</td>
                                <td>- $250</td>
                            </tr>
                            <tr>
                                <td>tax &amp; service fees</td>
                                <td>+ $150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>   <div className="col-lg-12 pt-3 pb-3">
                    <table className="w-100">
                        <tbody>
                            <tr>
                                <td>payable amount</td>
                                <td class="amount">$2410</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
