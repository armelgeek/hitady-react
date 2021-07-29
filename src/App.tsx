import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getLanguage, setLanguage, useTranslation } from 'react-multi-lang';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './views/Home'
//room
import Hotels from './Hotel/index'
import RoomList from './Hotel/rooms'
import DetailRoom from './Hotel/detail'
// car
import CarList from './Car/cars'
import CarIndex from './Car/index'
import DetailCar from './Car/detail'

// restaurant
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

  return (
    <Router>
      {/** <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(response) => verifyGoogleLogin(response)} googleAccountConfigs={{
        client_id: "208570737878-7te60ghelgjl6hgver579rlb3466nhvc.apps.googleusercontent.com"
      }} />
      **/}
      <Nav translator={t} getLanguage={getLanguage} />
      <div className="container-fluid">
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
          <Route path="/room/:roomId">
            <DetailRoom />
          </Route>
          <Route path="/cars">
            <CarIndex />
          </Route>
          <Route path="/car/:carId">
            <DetailCar />
          </Route>
          <Route path="/restaurants">
            <Foods />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <CheckoutResto />
          </Route>


          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        setLanguage={setLanguage}
        getLanguage={getLanguage}
      />
    </Router>
  );
};

export default App;
