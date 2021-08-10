import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
// refresh token
import Banner from '../components/Banner';

const ActivityTourCard = () => {
  return (
    <div class="col-xl-6 col-md-3 col-sm-6 mt-3">
      <div class="activity-card pt-2 pl-3 pr-3 pb-2 style-two d-flex">
        <div class="activity-img position-relative">
          <img src="activity/activity-h2.jpeg" alt="" />
          <span class="activity-hover-icon"><a href="#"><i class="fas fa-heart"></i></a></span>
        </div>
        <div class="activity-text">
          <div class="activity-tilte-head headline ul-li">
            <h5>
              <a href="#">
                Vatican Museum Private Tour
              </a>
            </h5>
            <div class="activity-features">
              <div class="icon-text">
                <div class="icon"><i class="fas fa-map-marker-alt"></i></div>London
              </div>
              <div class="icon-text">
                <div class="icon"><i class="fas fa-clock"></i></div> à 45 km de la centre ville
              </div>

            </div>
            {<div class="flex flex-row justify-end pr-4 m-0">
              <div class="detail-btn">
                <a href="#"> <i class="fas fa-angle-right"></i></a>
              </div></div>}
          </div>

        </div>
      </div>
    </div>
  )
}
const TravelCard = () => {
  return (
    <div class="destination-single ">
      <div class="destination-img bg-blue h-96  bg-travel">

        <div class="destination-content">
          <div class="content-left">
            <h5>Paris</h5>
            <small>8 Jun 2021 - 10 Jun 2021</small>
          </div>
          <div class="content-right">
            <h5 className="text-primary">$639</h5>
            <span> /personnes </span>
          </div>
        </div>
        <div class="destination-btn">
          <a href="#" >En savoir plus</a>
        </div>
      </div>
    </div>
  )
}
const HotelCard = () => {
  return (
    <>
      <div class="card card-span rounded-3 mb-3"><img class="rounded-3 " src="/hotels/4.png" alt="..." />
        <div class="card-body ps-3">
          <h5 class="fw-bold text-1000 text-truncate mb-2">Roosevelt Hotel</h5>
          <div>
            <span class="text-primary me-2">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span class="text-primary">Burger Arena</span>
            <div >
              <span class="text-primary me-2">
                <i class="far fa-clock"></i>
              </span>
              <small class="text-gray">A 5km de la centre ville</small>
            </div>

          </div>
        </div>
        <div class="card-footer flex justify-between ">
          <div>
            <span className="block"> A partir de</span> <h5 >100 000 Ar / <span >nuits </span></h5>
          </div>
          <div>
            <div class="detail-btn mt-2">
              <a href="#" className="text-gray"><i class="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>

    </>
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
    <div class="row  h-60 ">
      <div class="col-sm-6">
        <h3 className="font-resto">C'est quoi <span className="text-primary font-resto">Hitady</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas molestiae doloribus quo dicta. Soluta, consequatur sunt cumque tempora placeat deleniti nam? Minus quos eius velit molestiae sint natus asperiores!</p>
        <div class="ml-6">

          <ul class="flex flex-column max-w-full w-100 flex-wrap bullets">
            <li>Dolorem mediocritatem</li>
            <li>Mea appareat</li>
            <li>Prima causae</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-6">
        <a class="video-cover w-100 flex justify-center  bg-yellow-200" href="https://www.youtube.com/watch?v=NxPbcuUZcL0">
          <div className="w-100 items-center justify-center pt-32 pb-32 flex">
            <img src="https://img.icons8.com/color/64/000000/circled-play--v3.png" />
          </div>
        </a>
      </div>
    </div>
  )
}
const FoodItem = () => {
  return (
    <div class="mb-5">
      <div class="card card-span"><img height="300" src="restaurants/search-pizza.png" alt="..." />
        <div class="card-body ps-3">
          <h5 class="fw-bold text-1000 text-truncate mb-1">Cheese Burger</h5>
          <div><span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span><span class="text-primary">Burger Arena</span></div>

        </div><div class="card-footer flex justify-between ">
          <div className="mt-2">
            <h5>100 000 Ar </h5>
          </div>
          <div>
            <div class="detail-btn ">
              <a href="#" className="text-gray"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
const CarItem = () => {
  return (
    <>
      <div class="card card-span rounded-3 mb-3">
        <div class="h-48 img-car">

        </div>
        <div class="card-body">
          <div class="d-flex align-items-center"><img class="img-fluid" width="32" src="restaurants/logo/logo1.png" alt="" />
            <div class="flex-1 ms-3">
              <h5 class="fw-bold text-1000 text-truncate mb-2">Mercedez Bens</h5><span class="text-primary fs--1 me-1"><i class="fas fa-map-marker-alt"></i></span><span class="mb-0 text-primary">Ambozontany</span>
            </div>
          </div>
        </div>
        <div class="card-footer flex justify-between ">
          <div>
            <span className="block"> A partir de</span> <h6>1 000 000 Ar / <span >jour(s) </span></h6>
          </div>
          <div>
            <div class="detail-btn mt-2">
              <a href="#" className="text-gray"><i class="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

function Category({ name, icon }) {
  return (
    <>
      <div class="card card-category-etabl w-100  p-8 rounded-lg text-center">
        <div class="category-icon mb-2 text-primary hover:scale-75 duration-300">
          <i className={`fa fa-${icon} fa-2x  w-32`}></i>
        </div>
        <div class="category-text headline">
          <h3><a href="#" className="text-dark font-resto">{name}</a></h3>
        </div>
      </div>
    </>
  )
}
const More = ({ to }) => {
  return (
    <div class="flex flex-row justify-center items-center mt-2" >
      <a href="#0" class="p-3 bg-white border rounded-full"><strong>View all   <i class=" ml-1 fa fa-angle-right"></i></strong></a>
    </div >
  )
}
function Home() {

  const [activeHotelIndex, setActiveHotelIndex] = useState(0);
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [activeRestoIndex, setActiveRestoIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <Banner />
      <section class="pb-3 pt-3">
        <div class="container mt-12">
          <CQH />
        </div>
      </section>
      <section class="pb-3 pt-3">
        <div class="container ">
          <div class="row pt-28  mb-3">
            <div className="col-12 text-center">
              <div class="mb-4">
                <h3 class="font-resto">Recommended  <span className="text-primary font-resto">Hotels</span></h3>
                <div class="section-description">
                  <p className="max-h-60 pl-32 pr-32">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
              </div>
            </div>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveHotelIndex}
                activeItemIndex={activeHotelIndex}
                numberOfCards={4}
                gutter={20}
                outsideChevron
                leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
                rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}
                chevronWidth={40}
              >

                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
              </ItemsCarousel>
            </div>
            <More to={"/"} />
          </div>
        </div>
      </section>
      < section className="pt-4" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <h3 class="font-resto">Most Viewed <span className="text-primary font-resto ">Activities</span></h3>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <ActivityTourCard />
            <ActivityTourCard />
          </div>
        </div> </section >

      <section className="">
        <div className="container">
          <div className="row pt-16 mb-3">
            <div className="col-lg-12 text-center">
              <div className="">
                <h3 class="font-resto">Most Viewed <span className="text-primary font-resto ">Restaurants</span></h3>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
            </div>
          </div>

          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveRestoIndex}
              activeItemIndex={activeRestoIndex}
              numberOfCards={4}
              gutter={20}
              outsideChevron
              leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
              rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}
              chevronWidth={40}
            >

              <FoodItem />

              <FoodItem />

              <FoodItem />

              <FoodItem />

              <FoodItem />
            </ItemsCarousel>
          </div>
        </div> </section >
      <section className="">
        <div className="container mb-12">
          <div className="row pt-3 mb-12">
            <div className="col-lg-12 text-center">
              <div className="">
                <h6>

                </h6>
                <h3 className="font-resto">
                  Browse By <span className="text-primary font-resto ">Category</span>
                </h3>
              </div>
            </div>
          </div>
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveCategoryIndex}
              activeItemIndex={activeCategoryIndex}
              numberOfCards={5}
              gutter={15}
              outsideChevron
              leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
              rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}
              chevronWidth={40}
            >
              <Category name={"Hotels"} icon={"bed"} />
              <Category name={"Restaurants"} icon={"table"} />
              <Category name={"Activites"} icon={"globe"} />
              <Category name={"Voyages"} icon={"hiking"} />
              <Category name={"Voitures"} icon={"car"} />
            </ItemsCarousel>
          </div>


        </div></section>
      <section className="">
        <div className="container">
          <div className="row pt-6 mb-3">
            <div className="col-lg-12">
              <div className="">
                <h3 class="font-resto">Most Viewed <span className="text-primary font-resto ">Tours</span></h3>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <ItemsCarousel
                requestToChangeActive={setActiveTourIndex}
                activeItemIndex={activeTourIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
                rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}
                chevronWidth={40}
              >
                <TravelCard /> <TravelCard /> <TravelCard />
              </ItemsCarousel>
            </div>

            <div className="col-sm-4 h-100">
              <div class=" bg-light p-3  h-96">
                <h5 className="font-resto">Lorem <span className="font-resto text-primary">title</span> </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non autem et veritatis laboriosam nostrum odit, velit deleniti</p>
                <div class="ml-6">

                  <p className="text-bold"><i class="fa fa-check mr-2 text-success" aria-hidden="true"></i>
                    lorem ceci est cela</p>

                  <p className="text-bold"><i class="fa fa-check mr-2 text-success" aria-hidden="true"></i>
                    lorem ceci est cela</p>

                  <p className="text-bold"><i class="fa fa-check mr-2 text-success" aria-hidden="true"></i>
                    lorem ceci est cela</p>
                </div>
                <button className="mt-3 btn btn-primary">Contactez-nous</button>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="">
        <div className="container">
          <div className="row pt-16 mb-3">
            <div className="col-lg-12 text-center">
              <div className="">
                <h3 class="font-resto">Most Viewed <span className="text-primary font-resto ">Cars</span></h3>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
            </div>
          </div>
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveCarIndex}
              activeItemIndex={activeCarIndex}
              numberOfCards={4}
              gutter={20}
              outsideChevron
              leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
              rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}
              chevronWidth={40}
            >

              <CarItem />

              <CarItem />

              <CarItem />

              <CarItem />

              <CarItem />
            </ItemsCarousel>
          </div>

        </div>
      </section >
    </div >
  );
}

export default Home;