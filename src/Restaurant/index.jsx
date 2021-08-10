import React from 'react';
const Banner = () => {
  return (
    <div className="w-100 h-96 bg-resto relative overflow-hidden">
      <div className="flex flex-col justify-center items-center h-100">
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-5 col-lg-6 order-0 text-right order-md-1 mt-8 mt-md-0">
              <a><img className="img-fluid ml-32" width="300" src="restaurants/resto.png" alt="hero-header" /></a></div>
            <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 className="display-4 fs-md-5 fs-lg-6 fs-xl-8 text-white font-resto">Êtes-vous affamé?</h1>
              <p className="text-gray-700 mb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, incidunt! Aspernatur porro, tempora cupiditate quam deleniti doloremque voluptatem ea error, rem itaque consequuntur qui ab! Ipsum ex rem id eaque.</p>
              <button class="p-2 rounded-3xl bg-primary text-white mt-3">Commander maintenant !</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
const Restaurant = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default Restaurant;
