import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className='footer '>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <form className='news'>
                  <input
                    className='newslatter'
                    placeholder='Email'
                    type='text'
                    name=' Email'
                  />
                  <button className='submit'>Subscribe</button>
                </form>
              </div>
              <div className='col-md-12'>
                <h2>Newsletter</h2>
                <span>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in
                </span>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
                <div className='row'>
                  <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 '>
                    <div className='address'>
                      <h3>Contact us </h3>
                      <ul className='loca'>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/loc.png' alt='#' />
                          </a>
                          London 145
                          <br />
                          United Kingdom{" "}
                        </li>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/email.png' alt='#' />
                          </a>
                          demo@gmail.com{" "}
                        </li>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/call.png' alt='#' />
                          </a>
                          +12586954775{" "}
                        </li>
                      </ul>
                      <ul className='social_link'>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/fb.png' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/tw.png' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/lin(2).png' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img src='assets/icon/instagram.png' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='address'>
                      <h3>Courses</h3>
                      <ul className='Menu_footer'>
                        <li className='active'>
                          {" "}
                          <a href='#'>Masters Degree</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Post GraduateU</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Ndergraduate</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Engineering</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Ph.D Degree</a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='address'>
                      <h3>Information</h3>
                      <ul className='Links_footer'>
                        <li className='active'>
                          <a href='#'>Campus Tour</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Student Lifes</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Cholarship</a>{" "}
                        </li>
                        <li>
                          <a href='#'> Admission</a>{" "}
                        </li>
                        <li>
                          <a href='#'>Leadership</a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-6 '>
                    <div className='address'>
                      <a href='index.html'>
                        {" "}
                        <img src='assets/images/logo1.jpg' alt='logo' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright'>
            <div className='container'>
              <p>
                Copyright © 2021 Design by{" "}
                <a href='https://html.design/'>Muhammad Juman </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
