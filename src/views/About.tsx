import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <React.Fragment>
      <Header title="About" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          Ceci est le about
        </div>
      </main>
    </React.Fragment>
  );
};

export default About
