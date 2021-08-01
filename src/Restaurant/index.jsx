import React, { PropTypes } from 'react';
const BannerSearch = () =>{
  return (
      <div class="card w-xxl-75">
                <div class="card-body">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active mb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    </button></div>
                  </nav>
                  <div class="tab-content mt-3" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form class="row gx-2 gy-2 align-items-center">
                        <div class="col">
                          <div class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i><label class="visually-hidden" for="inputDelivery">Address</label><input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Your Address"/></div>
                        </div>
                        <div class="d-grid gap-3 col-sm-auto"><button class="btn btn-danger" type="submit">Find Food</button></div>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <form class="row gx-4 gy-2 align-items-center">
                        <div class="col">
                          <div class="input-group-icon"><label class="visually-hidden" for="inputPickup">Address</label><input class="form-control input-box form-foodwagon-control" id="inputPickup" type="text" placeholder="Enter Your Address"/></div>
                        </div>
                        <div class="d-grid gap-3 col-sm-auto"><button class="btn btn-danger" type="submit">Find Food</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
  )
}
const Banner = ()=>{
	return (
 	<div className="w-100 h-screen bg-resto relative overflow-hidden">
            <div className="flex flex-col justify-center items-center h-100">
            <div className="container">
          <div className="row flex-center">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0">
            <a className="img-landing-banner" href="#!"><img className="img-fluid" src="restaurants/resto.png" alt="hero-header"/></a></div>
            <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 className="display-3 fs-md-5 fs-lg-6 fs-xl-8 text-white font-resto">Êtes-vous affamé?</h1>
              <p className="text-800 mb-3 fs-4">Trouvez en quelques clics des repas accessibles<br className="d-none d-xxl-block"/>are accessible near you</p>
            <BannerSearch />
            </div>
          </div>
        </div>
          
        </div>
    </div>
	)
}
const Why = () =>{
  return (
    <section className="py-0 bg-primary-gradient">
        <div className="container-fluid">
          <div className="row justify-content-center g-0">
            <div className="col-xl-9">
              <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
                <h3 className="text-danger fs-3 fs-lg-5 lh-sm my-6 font-resto">Comment ça marche

</h3>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center"><img className="shadow-icon" src="assets/img/gallery/location.png" alt="..." height="112"/>
                    <h5 className="mt-4 fw-bold">Select location</h5>
                    <p className="mb-md-0">Choose the location where your food will be delivered.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center"><img className="shadow-icon" src="assets/img/gallery/order.png" alt="..." height="112"/>
                    <h5 className="mt-4 fw-bold">Choose order</h5>
                    <p className="mb-md-0">Check over hundreds of menus to pick your favorite food</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center"><img className="shadow-icon" src="assets/img/gallery/pay.png" alt="..." height="112"/>
                    <h5 className="mt-4 fw-bold">Pay advanced</h5>
                    <p className="mb-md-0">It's quick, safe, and simple. Select several methods of payment</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center"><img className="shadow-icon" src="assets/img/gallery/meals.png" alt="..." height="112"/>
                    <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                    <p className="mb-md-0">Food is made and delivered directly to your home.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
const RestaurantCard = ()=>{
  return (
            
          <div className="col-sm-6 col-md-4 col-lg-4  mb-3">
             <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="restaurants/dancake.png" height="30" alt="..."/>
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i>
                <span class="fs-0">20% off</span>
                </span>
                <span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i>
                <span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0 ml-2">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="restaurants/logo/logo1.png" alt=""/>
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Food world</h5><span class="text-primary fs--1 me-1"><i class="fas fa-map-marker-alt"></i></span><span class="mb-0 text-primary">Ambozontany</span>
                    </div>
                  </div><span class="badge bg-soft-danger p-2"><span class="fw-bold fs-5 text-success">Open now</span></span>
                </div>
              </div>
              </div>
          
  )
}
const Category = () =>{
  return (
  <div class="col-sm-6 col-md-2 col-xl mb-5 ">
                        <div class="card  border-0"><img class="img-fluid rounded-circle" src="restaurants/search-pizza.png" alt="..."/>
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">pizza</h5>
                          </div>
                        </div>
                      </div>
  )
}
const FoodItem =() =>{
  return (
      <div class="col-sm-6 col-md-3 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-3"><img class="img-fluid rounded-3 h-100" src="restaurants/cheese-burger.png" alt="..."/>
                          <div class="card-body ps-3">
                            <h5 class="fw-bold text-1000 text-truncate mb-1">Cheese Burger</h5>
                            <div><span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span><span class="text-primary">Burger Arena</span></div><span class="text-1000 fw-bold">3000 Ar</span>
                          </div>
                        </div>
                        <div class="d-grid gap-2"><a class="btn btn-lg btn-danger" href="#!" role="button">Ajouter au panier</a></div>
                      </div>
  )
}
const Restaurant = () => {
    return (
  		<>
  			<Banner />
        <Why />

  			<div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center mt-7 mb-5">
                    <h5 class="fw-bold fs-3 fs-lg-5 lh-sm font-resto text-danger">Popular items</h5>
                </div>
            </div>
            <div className="row gx-3 h-100 align-items-center">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        </div>
        <section className="py-5 overflow-hidden">
        <div className="container">
            <div class="row flex-center mb-3">
            <div class="col-lg-7">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start font-resto text-danger">Recherche par aliment</h5>
            </div>
        </div>
        <div className="row h-100 align-items-center">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

        </div>
      </section>
    
        <div class="container">
            <div class="row h-100 mt-5">
                <div class="col-lg-7 mx-auto text-center mb-6">
                  <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3 font-resto text-danger">Restaurants à fianarantsoa</h5>
                </div>

      <div className="row gx-2"> 
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
           
        </div></div>
      </div>
      
  		</>      
    );
};

export default Restaurant;
