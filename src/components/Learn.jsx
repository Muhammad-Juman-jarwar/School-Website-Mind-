import React from "react";

const Learn = () => {
  return (
    <React.Fragment>
      <div>
        <div id='learn' className='learn'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='titlepage'>
                  <h2>
                    Learn <strong className='yellow'>the Practical way</strong>
                  </h2>
                  <span>
                    packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                  </span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='learn_box'>
                  <figure>
                    <img src='assets/images/img.jpg' alt='img' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAKE */}
        <div className='make'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='titlepage'>
                  <h2>
                    Make Your{" "}
                    <strong className='white_colo'>Courses Standout</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                <div className='make_text'>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <a href='#'>Strat now</a>
                </div>
              </div>
              <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                <div className='make_img'>
                  <figure>
                    <img alt="make" src='assets/images/make_img.jpg' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Learn;
