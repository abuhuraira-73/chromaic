import React from "react";
import "swiper/css"; // Use the new CSS import instead of swiper-bundle.min.css

import Slider from "./pages-components/home-components/slider";
import Marquee from "./pages-components/home-components/marquee";
import Catagories from "./pages-components/home-components/catagories";
import Seller from "./pages-components/home-components/seller";
import Lookbook from "./pages-components/home-components/look-book";
import Testimonial from "./pages-components/home-components/testimonial";
import Brand from "./pages-components/home-components/brand";
import Shopgram from "./pages-components/home-components/shop-gram";
import Iconbox from "./pages-components/home-components/icon-box";
import ReadOurStories from "./pages-components/home-components/read-our-stories";
import Countdown from "./pages-components/home-components/countdown";
import Videobanner from "./pages-components/home-components/video-banner";

function Home() {
  return (
    <div id="wrapper">
      <Slider />
      <Marquee />
      <Catagories />
      {/* <Countdown /> */}
      <Seller />
      <Lookbook />
      {/* <Testimonial /> */}
      {/* <Brand /> */}
      <Shopgram />
      <Iconbox />
      <Videobanner />
      {/* <ReadOurStories /> */} 
    </div>
  );
}

export default Home;
