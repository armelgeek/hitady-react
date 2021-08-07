import React from 'react'

export default function Chambres() {
    return (
        <section id="chambres" className="mb-2">
            <h1 className="font-resto text-md section-etablissement-title">Chambres  <span class="text-primary font-resto">&</span> Suites</h1>
            <div className="flex flex-column">
                <div className="menu-part page-section" id="rooms">
                    <table className="rooms-box w-100">
                        <tbody><tr className="shadow-xl mb-4  pr-4 pl-4">
                            <td>
                                <h6 className="room-title">Deluxe Room</h6>
                                <a href="#">
                                    <img src="/hotels/4.jpeg" className="img-fluid blur-up lazyloaded" alt />
                                </a>
                            </td>
                            <td>
                                <div className="room-detail">
                                    <div className="row w-100">
                                        <div className="col-6 p-0">
                                            <h6>Amenities</h6>
                                            <div className="facility-detail">
                                                <ul className="bullet-facilities">
                                                    <li>king/twin
                                                    </li>
                                                    <li>Shower
                                                    </li>
                                                    <li>LCD TV</li>
                                                    <li>couch
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 p-0">
                                            <h6>inclusion</h6>
                                            <div className="bullet-facilities">
                                                <ul>
                                                    <li>Wi-Fi</li>
                                                    <li>Breakfast</li>
                                                    <li>non refundable</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="price-details">
                                    <div>
                                        <h6><del>$1250</del></h6>
                                        <h5>$1000</h5>
                                        <span>per night</span>
                                        <a href="/" className="btn btn-primary btn-block">book now</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                            <tr className="shadow-md mb-4  pr-4 pl-4">
                                <td>
                                    <h6 className="room-title">Deluxe Room</h6>
                                    <a href="#">
                                        <img src="/hotels/4.jpeg" className="img-fluid blur-up lazyloaded" alt />
                                    </a>
                                </td>
                                <td>
                                    <div className="room-detail">
                                        <div className="row w-100">
                                            <div className="col-6 p-0">
                                                <h6>Amenities</h6>
                                                <div className="facility-detail">
                                                    <ul>
                                                        <li><i className="fas fa-check" />king/twin
                                                        </li>
                                                        <li><i className="fas fa-check" />Shower
                                                        </li>
                                                        <li><i className="fas fa-check" />LCD TV</li>
                                                        <li><i className="fas fa-check" />couch
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0">
                                                <h6>inclusion</h6>
                                                <div className="facility-detail">
                                                    <ul>
                                                        <li><i className="fas fa-check" /> Wi-Fi</li>
                                                        <li><i className="fas fa-check" /> Breakfast</li>
                                                        <li><i className="fas fa-check" />non refundable</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="price-details">
                                        <div>
                                            <h6><del>$1250</del></h6>
                                            <h5>$1000</h5>
                                            <span>per night</span>
                                            <a href="/" className="btn btn-primary btn-block">book now</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="shadow-md mb-4 pr-4 pl-4">
                                <td>
                                    <h6 className="room-title">Deluxe Room</h6>
                                    <a href="#">
                                        <img src="/hotels/4.jpeg" className="img-fluid blur-up lazyloaded" alt />
                                    </a>
                                </td>
                                <td>
                                    <div className="room-detail">
                                        <div className="row w-100">
                                            <div className="col-6 p-0">
                                                <h6>Amenities</h6>
                                                <div className="facility-detail">
                                                    <ul>
                                                        <li><i className="fas fa-check" />king/twin
                                                        </li>
                                                        <li><i className="fas fa-check" />Shower
                                                        </li>
                                                        <li><i className="fas fa-check" />LCD TV</li>
                                                        <li><i className="fas fa-check" />couch
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0">
                                                <h6>inclusion</h6>
                                                <div className="facility-detail">
                                                    <ul>
                                                        <li><i className="fas fa-check" /> Wi-Fi</li>
                                                        <li><i className="fas fa-check" /> Breakfast</li>
                                                        <li><i className="fas fa-check" />non refundable</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="price-details">
                                        <div>
                                            <h6><del>$1250</del></h6>
                                            <h5>$1000</h5>
                                            <span>per night</span>
                                            <a href="/" className="btn btn-primary btn-block">book now</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                </div>

            </div>
        </section>
    )
}
