import React, { PropTypes } from 'react';

const RoomDescription = ({ room }) => {
    return (
        <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="main-title-area">
                            <h2 class="title mb-3">Hotel The Vilena</h2>
                        </div>
                        <span class="subtext text-secondary mb-4">Days Inn There you go</span>
                        <p>Eros id Consequat, facilisis, eros ridiculus vehicula justo lacinia. Spaptent and aenean. Justo facilisi gravida nascetur quis rutrum nostra. Nisl quisqu all per. Ante platea aenean Nunc turpis tristique. Primis aliquet inceptos all seamper per. Posuere litora vulputate sem risus habit praesent ultric enim leo pulvinar enim arcu blandit sit. Natoq dis. Suspendisse nonummy pellentesque place. Malesuad aenean. Leo curabitur elementum ultr. Rhoncus fusce ac eu nunc cras euismod ad dignissim natoque. Penatib natoque arcu, sed sit.</p>
                        <div class="mt-4 flat-medium flat-white clearfix">
                            <div class="free-service-item bg-info float-left mb-1 mr-1"> <span class="icon bg-primary float-left mr-2 text-center"><i class="flaticon-dish"></i></span>
                                <h6 class="inner-title text-dark fw-5 py-4">Free Breakfast</h6>
                            </div>
                            <div class="free-service-item bg-info float-left mb-1 mr-1"> <span class="icon bg-primary float-left mr-2 text-center"><i class="flaticon-wireless-connection"></i></span>
                                <h6 class="inner-title text-dark fw-5 py-4">Enjoy Free Wifi</h6>
                            </div>
                            <div class="free-service-item bg-info float-left mb-1 mr-1"> <span class="icon bg-primary float-left mr-2 text-center"><i class="flaticon-taxi"></i></span>
                                <h6 class="inner-title text-dark fw-5 py-4">Pickup &amp; Drop</h6>
                            </div>
                            <div class="free-service-item bg-info float-left mb-1 mr-1"> <span class="icon bg-primary float-left mr-2 text-center"><i class="flaticon-tv"></i></span>
                                <h6 class="inner-title text-dark fw-5 py-4">Free Cable Tv</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="img-1 mt-sm-30"><img src="/rooms/1.jpg" alt="The Valena" /></div>
                    </div>
                </div>
    );
};

export default RoomDescription;
