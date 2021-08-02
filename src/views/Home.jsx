import React, { useState } from 'react';
// refresh token
import Banner from '../components/Banner';

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
function Home() {

  return (
    <div>
      <Banner />

      <section class="pb-3 pt-3">
        <div class="container">
          <div class="row mt-4 h-60">
            <div class="col-sm-6  bg-info">

            </div>
            <div class="col-sm-6 bg-primary">
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
      </section>
      <Travel />
    </div>
  );
}

export default Home;