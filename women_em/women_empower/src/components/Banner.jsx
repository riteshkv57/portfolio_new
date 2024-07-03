import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="wrapper banner-wrapper">
      <div id="flexSlider" className="flexslider">
        <div className="region region-homeslider-portion">
          <div id="block-views-home-flexslider-block" className="block block-views first last odd">
            <div className="view view-home-flexslider view-id-home_flexslider view-display-id-block view-dom-id-0f4f84a9236186044f3929cc9c8b8a8c">
              <div className="view-content">
                <div className="skin-default">
                  <div id="flexslider_views_slideshow_main_home_flexslider-block" className="flexslider_views_slideshow_main views_slideshow_main flexslider_views_slideshow-processed">
                    <div className="flex-nav-container">
                      <div className="flexslider">
                        
                        <div className="flex-viewport">
                          <ul id="flexslider_views_slideshow_home_flexslider-block" className="flexslider-views-slideshow-main-frame slides">
                            <li className="flexslider-views-slideshow-main-frame-row flexslider_views_slideshow_slide views-row-1 views-row-odd">
                              <img src="https://cbpssubscriber.mygov.in/assets/uploads/3rpbtfC38B9muoRQ?43" alt="Slide 1" />
                              <div className="slide-caption">
                                <h2>Slide 1 Title</h2>
                                <p>Slide 1 Description</p>
                              </div>
                            </li>
                            {/* Add more slide items as needed */}
                          </ul>
                        </div>
                        <ol className="flex-control-nav flex-control-paging">
                          <li><a className="flex-active">1</a></li>
                          <li><a>2</a></li>
                          <li><a>3</a></li>
                          {/* Add more pagination items as needed */}
                        </ol>
                        <ul className="flex-direction-nav">
                          <li><a className="flex-prev">Previous</a></li>
                          <li><a className="flex-next">Next</a></li>
                        </ul>
                        <div className="flex-pauseplay">
                          <a className="flex-pause">Pause</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
