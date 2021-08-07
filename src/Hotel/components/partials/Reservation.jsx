import React from 'react'
import ModalBooking from '../Booking/ModalBooking'

export default function Reservation() {
    return (
        <section id="carte" className="mb-24">
            <h1 className="font-resto text-md section-etablissement-title">Reservation <span className="text-primary font-resto">maintenant !</span></h1>
            <div class="qty">
                <div class="qty-box d-flex align-items-center justify-content-between">
                    <label>Adults <span>Age 18+</span></label>
                    <div class="qty-btn d-flex align-items-center">
                        <div class="qty-dec"><i class="fa fa-minus"></i></div><input type="text" name="qtyInput" value="0" /><div class="qty-inc" ><i class="fa fa-plus"></i></div>
                    </div>
                </div>
                <div class="qty-box d-flex align-items-center justify-content-between">
                    <label>Seniors <span>60+ years old</span></label>
                    <div class="qty-btn d-flex align-items-center">
                        <div class="qty-dec"><i class="fa fa-minus"></i></div><input type="text" name="qtyInput" value="0" /><div class="qty-inc"><i class="fa fa-plus"></i></div>
                    </div>
                </div>
                <div class="qty-box d-flex align-items-center justify-content-between">
                    <label>Enfants <span>0-2 years old</span></label>
                    <div class="qty-btn d-flex align-items-center">
                        <div class="qty-dec"><i class="fa fa-minus"></i></div><input type="text" name="qtyInput" value="0" /><div class="qty-inc"><i class="fa fa-plus"></i></div>
                    </div>
                </div>
            </div>
            <div>
                <select className="form-control border mb-3">
                    <option value="" disabled="" selected="">Room Type</option>
                    <option value="saab">Deluxe Room</option>
                    <option value="audi">Suite</option>
                    <option value="opel">Royal room</option>
                </select>
            </div>
            <ModalBooking data={[]} />
        </section>
    )
}
