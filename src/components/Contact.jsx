import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <div id="contact" className="contact">
  <div className="container-fluid padding_left2">
    <div className="white_color">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div id="map">
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <form className="contact_bg">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact <strong className="yellow">us</strong></h2>
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Name" type="text" name="Your Name" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Email" type="text" name="Your Email" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Phone" type="text" name="Your Phone" />
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>

    </React.Fragment>
  );
};
export default Contact;