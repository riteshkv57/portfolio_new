import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section id="follow" className="featured-services">
        <div className="container px-4" data-aos="fade-up">
          <h2 className="text-center pb-5 text-light"> Connect with Us</h2>
          <div className="row">
          <div className="col-lg-4 col-12 mb-5 mb-lg-0">
  <ul className="connected-icons text-center">
    <li className="connected-icon">
      <a target="_blank" href="https://www.facebook.com/NCWIndia">
        <span className="icon-social-facebook"></span>
        <h4 className="white">Facebook</h4>
      </a>
    </li>
    <li className="connected-icon">
      <a target="_blank" href="https://twitter.com/NCWIndia">
        <span className="icon-social-twitter"></span>
        <h4 className="white">Twitter</h4>
      </a>
    </li>
    <li className="connected-icon">
      <a target="_blank" href="https://www.youtube.com/NCWIndia">
        <span className="icon-social-youtube"></span>
        <h4 className="white">Youtube</h4>
      </a>
    </li>
    <li className="connected-icon">
      <a target="_blank" href="https://www.instagram.com/NCWIndia/">
        <span className="icon-social-instagram-outline"></span>
        <h4 className="white">Instagram</h4>
      </a>
    </li>
  </ul>
</div>
            <div className="col-lg-8 col-12 mb-5 mb-lg-0 ">
              <div className="form-wrapper">
                <form id="contactForm" className="row g-3" autoComplete="off">
                  <input type="hidden" name="_token" value="Zb69ffthC7ZxaDMZtyiafJCAf4SN8Hnj7b99nc62" />
                  <div className="col-md-4 mb-3">
                    <label htmlFor="firstName" className="form-label">Name*</label>
                    <input type="text" className="form-control" name="firstname" id="firstName" fdprocessedid="3zduc" />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile*</label>
                    <input type="text" className="form-control" name="mobile" id="mobile" fdprocessedid="imftcc" />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input type="email" className="form-control" name="email" id="email" fdprocessedid="e63x2c" />
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="message" className="form-label">Message*</label>
                    <textarea className="form-control" rows="2" name="message" cols="25"></textarea>
                  </div>

                  <div className="col-5 mb-3 captcha">
                    <span><img src="https://www.ncwwomenhelpline.in/captcha/flat?4UYhtOXo" /> </span>
                  </div>

                  <div className="col-6 mb-3 pl-0">
                    <input type="text" name="captcha" className="form-control" fdprocessedid="dldpcd" />
                  </div>

                  <div className="col-1 mb-3 p-0">
                    <a href="javascript:void(0);" className="refresh_captcha"><i className="fa fa-refresh" aria-hidden="true"></i></a>
                  </div>

                  <div className="col-12">
                    <button id="formsubmit" type="submit" name="submit" className="btn btn-dark" fdprocessedid="yai21">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
