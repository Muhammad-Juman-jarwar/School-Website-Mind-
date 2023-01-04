import { Link } from "react-router-dom";
import { Button, Tab } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className='header-top'>
          <div className='header'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section'>
                  <div className='full'>
                    <div className='center-desk'>
                      <div className='logo'>
                        <a href='#'>
                          <img src='assets/images/logo.png' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-10 col-lg-8 col-md-8 col-sm-9'>
                  <div className='header_information'>
                    <div className='menu-area'>
                      <div className='limit-box'>
                        <nav className='main-menu '>
                          <ul className='menu-area-main'>
                            <li className='active'>
                              <a href='#'>Home</a>
                            </li>
                            <li>
                              <a href='#courses'>My Courses </a>
                            </li>
                            <li>
                              <a href='#about'>About</a>
                            </li>
                            <li>
                              <a href='#learn'>My Profile</a>
                            </li>
                            <li>
                              <a href='#important'>Become an Instructor</a>
                            </li>
                            <li>
                              <a href='#contact'>Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className='mean-last'>
                      <Link to="/signin">
                        <Button
                          className='my-2 my-sm-0 login-signup'
                          variant='contained'
                          size='small'
                        >
                          Login
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button 
                        variant='contained' 
                        className="my-2 my-sm-0 login-signup"
                        size='small'>
                          Sign Up
                        </Button>
                      </Link>
                      {/* <Link className="login-signup" to="/signup"> <span>login</span>/<span>sing up</span></Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end header inner */}
          {/* end header */}
          <section className='slider_section'>
            <div
              id='myCarousel'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#myCarousel'
                  data-slide-to={0}
                  className='active'
                />
                <li data-target='#myCarousel' data-slide-to={1} />
                <li data-target='#myCarousel' data-slide-to={2} />
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container-fluid padding_dd'>
                    <div className='carousel-caption'>
                      <div className='row'>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                          <div className='text-bg'>
                            <h1>Search your Favorite Course here</h1>
                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                            <a href='#'>Read more</a>
                            <a href='#'>get a qoute</a>
                          </div>
                        </div>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                          <div className='images_box'>
                            <figure>
                              <img src='assets/images/img2.png' />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='container-fluid padding_dd'>
                    <div className='carousel-caption'>
                      <div className='row'>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                          <div className='text-bg'>
                            <h1>Search your Favorite Course here</h1>
                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                            <a href='#'>Read more</a>
                            <a href='#'>get a qoute</a>
                          </div>
                        </div>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                          <div className='images_box'>
                            <figure>
                              <img src='assets/images/img2.png' />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='container-fluid padding_dd'>
                    <div className='carousel-caption '>
                      <div className='row'>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                          <div className='text-bg'>
                            <h1>Search your Favorite Course here</h1>
                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                            <a href='#'>Read more</a>
                            <a href='#'>get a qoute</a>
                          </div>
                        </div>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                          <div className='images_box'>
                            <figure>
                              <img src='assets/images/img2.png' />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <a
          className='carousel-control-prev'
          href='#myCarousel'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#myCarousel'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </header>
    </React.Fragment>
  );
};
export default Header;
