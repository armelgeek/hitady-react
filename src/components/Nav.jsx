import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux'
import Header from './Header';
import NavCartItem from './NavCartItem';
import { GoogleLogin } from 'react-google-login';
const clientId = '208570737878-7te60ghelgjl6hgver579rlb3466nhvc.apps.googleusercontent.com';

const Nav = ({ translator, getLanguage, socket }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showCartMenu, setShowCartMenu] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const links = [
    { fr: 'Accueil', en: 'Home', to: '/' },
    { fr: 'Madagascar', en: 'Madagascar', to: '/madagascar' },
    { fr: 'Voyages', en: 'Travels', to: '/travel' },
    { fr: 'Hotels', en: 'Hotel', to: '/hotels' },
    { fr: 'Restaurants', en: 'Restaurant', to: '/restaurants' },
    { fr: 'Activités', en: 'Activity', to: '/activity' },
    { fr: 'Voitures', en: 'Cars', to: '/cars' },
  ];
  const { cartItems } = useSelector(state => state.cart);
  const priceTotal = useSelector(state => {
    const cartAllItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }
    return totalPrice;
  })
  const onSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "auth", data: { result, token } });
      history.push('/')
    } catch (error) {
      console.log(error)
    }
    console.log('Login Success: currentUser:', res.profileObj);
  };
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const handleLogout = () => {
    dispatch({ type: "logout" })
    history.push('/')
    setUser(null)
  }
  useEffect(() => {

    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container-fluid">
          <a class="navbar-brand font-logo text-primary" href="#">Hitady</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {links.map((link, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    key={getLanguage() == 'fr' ? link.fr : link.en}
                    to={link.to}
                    className={` nav-link font-medium ${location.pathname === link.to
                      ? 'active'
                      : ''
                      } ${i > 0 && 'ml-1'}`}
                  >
                    {getLanguage() == 'fr' ? link.fr : link.en}
                    {i == 0 && <span className="visually-hidden">(actuel) </span>}
                  </Link>
                </li>
              ))}

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">

              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block mr-3">
          <div className="ml-4 flex items-center md:ml-6">


            <div className="ml-3 relative">
              <div>
                <button
                  onClick={() => setShowCartMenu(!showCartMenu)}>
                  <span className="sr-only">Open cart menu</span>
                  <Link to={"/cart"} >
                    {cartItems.length > 0 &&
                      <span className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">{cartItems.length}</span>
                    }
                  </Link>
                </button>
                {showCartMenu && (

                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      {cartItems.length === 0 &&
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >{translator('restaurant.noItemCart')}</a>
                      }
                      {cartItems.map(item => (
                        <NavCartItem
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          count={item.count}
                        />
                      ))}
                      {cartItems.length !== 0 && (<NumberFormat value={priceTotal} displayType={'text'} thousandSeparator={true} suffix={' Ar'} />)}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav

{/**
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                Hitady
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((link, i) => (
                    <Link
                      key={link.text}
                      to={link.to}
                      className={` text-sm font-medium ${location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                        } ${i > 0 && 'ml-4'}`}
                    >
                      {link.text}
                    </Link>
                  ))}

                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => setShowCartMenu(!showCartMenu)}>
                      <span className="sr-only">Open cart menu</span>
                      Mon Panier
                      <Link to={"/cart"} >
                        {cartItems.length > 0 &&
                          <span className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">{cartItems.length}</span>
                        }
                      </Link>
                    </button>
                    {showCartMenu && (

                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 rounded-md bg-white shadow-xs"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                          {cartItems.length === 0 &&
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >Nothing in the cart</a>
                          }
                          {cartItems.map(item => (
                            <NavCartItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              count={item.count}
                            />
                          ))}
                          {cartItems.length !== 0 && (<NumberFormat value={priceTotal} displayType={'text'} thousandSeparator={true} suffix={' Ar'} />)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>
                  {showProfileMenu && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1 rounded-md bg-white shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {links.map((link, i) => (
              <Link
                key={link.text}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === link.to ? activeClass : inactiveClass
                  } ${i > 0 && 'mt-1'}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>*/}