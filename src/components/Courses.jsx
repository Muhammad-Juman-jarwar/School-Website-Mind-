import React from "react";

const Courses = () => {
  return (
    <React.Fragment>
      <div id='courses' className='Courses'>
        <div className='container-fluid padding_left3'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='box_bg'>
                <div className='box_bg_img'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='box_my'>
                        <figure>
                          <img src='assets/images/my1.jpg' />
                        </figure>
                        <div className='overlay'>
                          <h3>Data Structures</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content o
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='box_my'>
                        <figure>
                          <img src='assets/images/my2.jpg' />
                        </figure>
                        <div className='overlay'>
                          <h3>Cinematography</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content o
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='box_my'>
                        <figure>
                          <img src='assets/images/my3.jpg' />
                        </figure>
                        <div className='overlay'>
                          <h3>Skills</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content o
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='box_my'>
                        <figure>
                          <img src='assets/images/my4.jpg' />
                        </figure>
                        <div className='overlay'>
                          <h3>Teaching Science</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content o
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 border_right'>
              <div className='box_text'>
                <div className='titlepage'>
                  <h2>
                    My <strong className='yellow'> Courses</strong>
                  </h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <a href='#'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Courses;
