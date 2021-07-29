import React from 'react';
import { Link } from 'react-router-dom';
const RoomCard = ({ room }) => {
    return (
       <div class="col-md-6 col-lg-4">
       
          <div class="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div class="thumb-top relative">
                                <ul class="facility-icon absolute upper-place-bottom-left">
                                    <li><i class="flaticon-tv">icon</i></li>
                                    <li><i class="flaticon-wifi">icon</i></li>
                                </ul>
                                <div class="room-size absolute upper-place-bottom-right">12 X 15 Sqft</div>
                                <div class="overflow_hidden"><img src="/rooms/3.jpg" alt="Booking Room"/></div>
                            </div>
                            <div class="room-info pl-2 pr-2 pt-4 p-5">
                                <div class="down-line-left mb-3">
                                    <h6 class="title"><a class="text-secondery" href="#">{room.name}</a></h6>
                                    <span>Duble bed 2 window, mountain view</span> </div>
                                <div class="h5 per-night text-secondery">{room.price} Ar<small>/Night</small></div>
                                  <Link className="btn btn-primary float-right" to={{
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

                      
