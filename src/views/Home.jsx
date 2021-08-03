import React, { useState } from 'react';
// refresh token
import Banner from '../components/Banner';
const ActivityCard = () => {
  return (
    <div>
      <div className="col-xl-6 col-md-3 col-sm-6 mb-30 image-grid-item" style={{ "position": "absolute", "left": "0%", "top": "0px" }}>
        <div className="activity-card style-two d-flex">
          <div className="activity-img position-relative">
            <span className="price-badge">$120</span>
            <img src="assets/img/activity/activity-h2.jpg" alt />
            <span className="activity-hover-icon"><a href="#"><i className="fas fa-heart" /></a></span>
          </div>
          <div className="activity-text">
            <div className="activity-tilte-head headline ul-li">
              <h3>
                <a href="#">
                  Vatican Museum Private Tour
                </a>
              </h3>
              <div className="activity-features">
                <div className="icon-text">
                  <div className="icon"><i className="fas fa-clock" /></div>5 Days
                </div>
                <div className="icon-text">
                  <div className="icon"><i className="fas fa-map-marker-alt" /></div>London
                </div>
                <div className="icon-text">
                  <div className="icon"><i className="fas fa-users" /></div> Small
                </div>
                <div className="icon-text">
                  <div className="icon"><i className="fas fa-running" /></div> Skip Line
                </div>
              </div>
            </div>
            <div className="activity-agent clearfix">
              <div className="activity-agent-img float-left">
                <img src="assets/img/activity/agent1.jpg" alt />
              </div>
              <div className="activity-agent-text">
                <h4><a href="#">Michael Jack</a></h4>
                <span>Example Agency</span>
              </div>
              <div className="activity-btn btn-2 float-right">
                <a href="#">Detail <i className="fas fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const TravelCard = () => {
  return (
    <div class="col-lg-4 mb-3">

      <div class="destination-single">
        <div class="destination-img">
          <img src="/travels/location-1.jpeg" alt="" />
          <div class="destination-content">
            <div class="content-left">
              <h5>Paris</h5>
              <small>From 8 Jun 2021</small>
            </div>
            <div class="content-right">
              <h5 className="text-primary">$639</h5>
              <span>Per Day</span>
            </div>
          </div>
          <div class="destination-btn">
            <a href="#">2 Activities</a>
          </div>
        </div>
      </div>
    </div>
  )
}
const HotelCard = () => {
  return (

    <div className="col-3 mb-4">
      <div class="hotel-grid shadow-lg">
        <div class="hotel-grid-wrapper bx-wrapper">
          <div class="image-sec animate-img">
            <a href="hotel-detail.html" tabindex="0">
              <img src="/hotels/4.png" class="full-width" alt="img" />
            </a>
          </div>
          <div class="hotel-grid-caption padding-20 bg-custom-white p-relative">
            <h4 class="title fs-16"><a href="hotel-detail.html" class="text-custom-black" tabindex="0">Roosevelt Hotel<small class="text-light-dark">Paris france</small></a></h4>
            <span class="price"><small></small>$100 /nights</span>
            <div class="action">
              <a class="bg-primary btn-small" href="hotel-detail.html" >View</a>
              <a class="btn-first bg-info  btn-submit" href="booking.html" tabindex="0">Book</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Travel = () => {
  return (
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="relative overflow-hidden">
        <div class="listing-image">
          <img src="travels/trip.jpg" alt="Image" class="img-fluid hover:transform scale-50" />
        </div>
        <div class="listing-item-content">
          <a class="px-3 mb-3 category bg-primary" href="#">$200.00</a>
          <h2 class="mb-1"><a href="trip-single.html">Dignissimos debitis</a></h2>
        </div>
      </div>
    </div>
  )
}
const CQH = () => {
  return (
    <div class="row mt-4 h-60">
      <div class="col-sm-6">

      </div>
      <div class="col-sm-6">
        <a class="w-100 flex align-items justify-center h-100 bg-yellow-200" href="https://www.youtube.com/watch?v=NxPbcuUZcL0">
          <div className="w-100  h-100">

            <span class="fa fa-play-circle-outline">1111</span>
          </div>
        </a>
      </div>
    </div>
  )
}
function Home() {

  return (
    <div>
      <Banner />
      <section class="pb-3 pt-3">
        <div class="container">
          <CQH />
        </div>
      </section>
      {/**<section class="pb-3 pt-3">
        <div class="container">
          <div class="row mt-4 ">
            <div className="col-12"> <div class="section-header">
              <div class="section-heading">
                <h3 class="text-custom-black">Recommended Hotels</h3>
                <div class="section-description">
                  <p class="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
              </div>
            </div> </div>
           <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
         *   <div class="row mt-4 h-60">
            <div class="col-sm-6  bg-info">
              <h2>c'est quoi <span className="text-primary">Hitady</span></h2>
              <p>We will help you select a pool that's <span class="text-bold">right for your needs</span> and your budget. Choose from hundreds of proven designs, or, if you wish, we'll design a pool that's as unique as you are. With special attention to detail, iPool will create a sparkling new environment in your own backyard with special landscaping, cabanas, gazebos, fountains, spas and hot tubs, fences, walkways, and numerous other options. We'll show you how to <a href="#" class="text-link">plan your pool</a> for maximum enjoyment, making the best use of available sunlight, existing foliage and natural windbreaks, and tastefully integrate pool design with the architecture of your home.</p><a class="btn btn-sm" href="#"><span>Learn more</span></a>
            </div>
            <div class="col-sm-6 bg-primary">
              <a class="video-cover bg-green-50" data-lightbox="iframe" href="https://www.youtube.com/watch?v=NxPbcuUZcL0"><span class="fa fa-play-circle-outline"></span></a>
            </div>
          </div>
          <div class="row mt-4 h-60">
            <div class="col-sm-3 bg-info">
              hotel 1
            </div>
            <div class="col-sm-9 bg-primary">
              hotel 2
            </div>
          </div>
          <div class="row mt-4 h-60">
            <div class="col-sm-3 bg-info">
              resto
            </div>
            <div class="col-sm-3 bg-primary">
              resto
            </div>
            <div class="col-sm-3 bg-info">
              resto
            </div>
            <div class="col-sm-3 bg-primary">
              resto
            </div>
            <div class="col-sm-3 bg-info">
              resto
            </div>
            <div class="col-sm-3 bg-primary">
              resto
            </div>
            <div class="col-sm-3 bg-info">
              resto
            </div>
            <div class="col-sm-3 bg-primary">
              resto
            </div>
            <div class="col-sm-3 bg-info">
              resto
            </div>
            <div class="col-sm-3 bg-primary">
              resto
            </div>

          </div>
          <div class="row mt-4 h-60">
            <div class="col-sm-12">
              <Travel />
            </div>
            <div class="col-sm-9 bg-primary">
              voyages 1
            </div>
            <div class="col-sm-3 bg-info">

              voyages 2
            </div>
          </div>

          <div class="row mt-4 h-60">
            <div class="col-sm-12 bg-info">
            </div>

          </div>
          <div class="row mt-4 h-60">
            <div class="col-sm-3 bg-info">
              hotel 1
            </div>
            <div class="col-sm-9 bg-primary">
              hotel 2
            </div>
          </div>
          <div class="row mt-4 h-40">
            <div class="col-sm-4 bg-info">
              Raison
            </div>
            <div class="col-sm-4 bg-info">
              Raison
            </div>
            <div class="col-sm-4 bg-info">
              Raison
            </div>

          </div>

          <div class="row mt-4 h-40">
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>
            <div class="col-sm-2 bg-info">
              Partenaires
            </div>


          </div>

      
    </div>
      </section >
  {/*<section id="destination" className="destination-section">
        <div className="container">
          <div className="section-title text-left headline  position-relative">
            <span>Locations</span>
            <h2>
              Wouldn't you like to be in<br /> the best locations in the world?
            </h2>
          </div>
          <div className="row">
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
          </div>
        </div>
      </section>*/}
      {/*< section id="featured-activities" className="featured-activity-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title headline">
                <span>Most Viewed Activities</span>
                <h2>
                  Some of the activities that our customers frequently look at.
                </h2>
              </div>
            </div>
          </div>
          <div className="row relative">
            http://www.templatemonsterpreview.com/demo/185337.html?_gl=1*6kzvr0*_ga*MjA4OTQ4NTk5OS4xNjI3OTQxMDU0*_ga_FTPYEGT5LY*MTYyNzk0MTA1Mi4xLjEuMTYyNzk0MjE3MS41MQ..
          </div>
        </div> </section > */}
    </div >
  );
}

export default Home;