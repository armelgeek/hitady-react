import React from 'react';
import { Link } from 'react-router-dom';
const RoomCard = ({ room }) => {
    return (
        <div className="col-md-6 col-lg-4">

            <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                <div className="thumb-top relative">
                    <ul className="facility-icon absolute upper-place-bottom-left">
                        <li><i className="flaticon-tv">icon</i></li>
                        <li><i className="flaticon-wifi">icon</i></li>
                    </ul>
                    <div className="room-size absolute upper-place-bottom-right">12 X 15 Sqft</div>
                    <div className="overflow_hidden"><img src="/rooms/3.jpg" alt="Booking Room" /></div>
                </div>
                <div className="room-info pl-2 pr-2 pt-4 p-5">
                    <div className="down-line-left mb-3">
                        <h6 className="title"><a className="text-secondery" href="#">{room.name}</a></h6>
                        <span>Duble bed 2 window, mountain view</span> </div>
                    <div className="h5 per-night text-secondery">{room.price} Ar<small>/Night</small></div>
                    <Link classNameName="btn btn-primary float-right" to={{
                        pathname: `/room/${room.id}`,
                        state: { roomID: room.id },
                    }}
                    >Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;


