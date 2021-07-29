import React from 'react'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <nav className="flex  lg:flex-col justify-between ">
      <ul className="nav">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link pl-0 dropdown-toggle" data-toggle="dropdown"> USD </a>
          <ul className="dropdown-menu small">
            <li><a className="dropdown-item" href="#">EUR</a></li>
            <li><a className="dropdown-item" href="#">AED</a></li>
            <li><a className="dropdown-item" href="#">RUBL </a></li>
            </ul>
        </li>
         <li className="nav-item dropdown show">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">   Language </a>
            <ul className="dropdown-menu small" x-placement="bottom-start">
            <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">Arabic</a></li>
            <li><a className="dropdown-item" href="#">Russian </a></li>
            </ul>
        </li>
      </ul>
  </nav>
    </>
  );
};

export default Header
