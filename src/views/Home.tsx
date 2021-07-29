import React from 'react'
import Search from '../components/Search'

const Home = ({translator}) => {
  return (
    <>
      <div> {translator('home.Title', {param: 'react'})} </div>
    </>
  );
};

export default Home
