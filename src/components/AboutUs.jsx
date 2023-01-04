import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div id='about' className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='about-box'>
                <h2>
                  About <strong className='yellow'>Our Game</strong>
                </h2>
                <p>
                  orem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatem maiores eaque similique non distinctio voluptates
                  perspiciatis omnis, repellendus ipsa aperiam, laudantium
                  voluptatum nulla?. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Soluta, assumenda, vo luptatum. Libero
                  eligendi molestias iure error animi totam laudantium,
                  aspernatur similique id eos at consectetur illo culpa,
                </p>
                <a href='#'>Read more</a>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='about-box'>
                <figure>
                  <img src='assets/images/about.jpg' alt='#' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutUs;
