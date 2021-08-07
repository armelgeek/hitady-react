import React from 'react'

export default function HotelInformation() {
    return (
        <div className=" mt-4 mb-4 flex items-center justify-start shadow-xl">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="flex flex-row justify-start gap-6">
                            <div className="">
                                <img src="/activity/detail/agency-1.png" alt="" />
                            </div>
                            <div className="flex flex-row justify-between w-100">
                                <div className="title">
                                    <h1 className="title-etablissement">
                                        Vannie hotel
                                        <small className="ml-3">
                                            <i className="text-base text-yellow-500 fa fa-star"></i>
                                            <i className="text-base ml-1 text-yellow-500 fa fa-star"></i>
                                        </small>
                                        <span class="share-buttons ml-2">
                                            <a href="#" class=" text-gray-700  border rounded-xl btn-sm mr-2"><i class="fa fa-share-square"></i> share</a>
                                            <a href="#" class=" text-gray-700 border rounded-xl btn-sm"><i class="fa fa-heart"></i> save</a>
                                        </span>
                                    </h1>

                                    <span class="etablissement-types bg-primary text-white mr-3">Hotel</span>
                                    <span class="text-gray-500"><i class="fa fa-map-marker"></i> P.za del Duomo, Milan, Italy - <a href="#carte" rel="noopener noreferrer">voir la carte</a></span>
                                    <div class="facility-detail mt-3">
                                        <span>free wifi</span>
                                        <span>free breakfast</span>
                                    </div>
                                </div>
                                <div className="price mt-0 mb-4 shadow-sm p-3 border-2 border-yellow-700  rounded-2xl">
                                    <small className="text-gray-500 text-sm">A partir de </small>
                                    <h3 className="text-primary text-2xl">30 000<span className="ml-1 font-resto">Ar</span> <span className="text-sm text-gray-600">/nuit(s)</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
