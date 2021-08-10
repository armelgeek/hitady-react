import React, { useMemo, useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getLanguage, setLanguage, useTranslation } from 'react-multi-lang';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { UserContext } from "./hooks/UserContext";
import Nav from './components/Nav'

import Footer from './components/Footer'
import Home from './views/Home'
//room
import Hotels from './Hotel/index'
import RoomList from './Hotel/rooms'
import DetailHotel from './Hotel/detail'
import BookingHotel from './Hotel/components/Booking/index'
import PayHotel from './Hotel/components/Booking/pay'

// car
import CarList from './Car/cars'
import CarIndex from './Car/index'
import DetailCar from './Car/detail'

// restaurant
import Restaurant from './Restaurant/index'
import Foods from './Restaurant/foods'
import CheckoutResto from './Restaurant/checkout'
// cart
import Cart from './Restaurant/cart'
//travel
import TravelList from './Travel/index';
import Orders from './views/Orders'
import About from './views/About'
import NotFound from './views/NotFound'
import GoogleOneTapLogin from 'react-google-one-tap-login';
import BookingSuccefull from './Hotel/components/Booking/BookingSuccefull';
import BookingFailed from './Hotel/components/Booking/BookingFailed';
import Madagascar from './views/Madagascar';
import ActivityIndex from './Activites';
const App = () => {
  const t = useTranslation()
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  useEffect(() => {
    if (window.localStorage.getItem('theme') == "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(previous => {
      switcher({ theme: previous ? themes.light : themes.dark });
      (previous ?
        window.localStorage.setItem('theme', themes.light)
        : window.localStorage.setItem('theme', themes.dark)
      );
      return !previous;
    });
  };

  const verifyGoogleLogin = async (data) => {
    console.log(data)
    const res = await axios.post('http://localhost:8000/one-tap-login', { hello: 'world' }, {

    });

    // responseData = await response.json();
  }
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={value}>
        {/** <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(response) => verifyGoogleLogin(response)} googleAccountConfigs={{
        client_id: "208570737878-7te60ghelgjl6hgver579rlb3466nhvc.apps.googleusercontent.com"
      }} />
      **/}
        <Nav translator={t} getLanguage={getLanguage} />
        <>
          <Switch>
            <Route exact path="/">
              <Home translator={t} />
            </Route>
            <Route path="/travel">
              <TravelList />
            </Route>
            <Route path="/hotels">
              <Hotels />
            </Route>
            <Route path="/rooms">
              <RoomList />
            </Route>
            <Route path="/hotel/:hotelId">
              <DetailHotel />
            </Route>
            <Route path="/booking/hotel/1">
              <BookingHotel />
            </Route>
            <Route path="/booking/pay/hotel/1">
              <PayHotel />
            </Route>
            <Route path="/booking/pay/success/1">
              <BookingSuccefull />
            </Route>
            <Route path="/booking/pay/failed/1">
              <BookingFailed />
            </Route>

            <Route path="/cars">
              <CarIndex />
            </Route>
            <Route path="/car/:carId">
              <DetailCar />
            </Route>
            <Route path="/restaurants">
              <Restaurant />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <CheckoutResto />
            </Route>
            <Route path="/activites">
              <ActivityIndex />
            </Route>
            <Route path="/madagascar">
              <Madagascar />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </>
        <Footer
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          setLanguage={setLanguage}
          getLanguage={getLanguage}
        />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
