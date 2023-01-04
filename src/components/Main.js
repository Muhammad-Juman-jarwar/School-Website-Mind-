import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Ours from './Ours';
import Courses from './Courses';
import Learn from './Learn';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => {
  return (
    <React.Fragment>
          <Header />
          <AboutUs />
          <Ours />
          <Courses />
          <Learn />
          <Contact />
          <Footer />

    </React.Fragment>
  );
};
export default Main;