import React from "react";
import FlatTitle from "./pages-components/about-us-components/flat-title";
import Slider from "./pages-components/about-us-components/about-slider";
import AboutSlider from "./pages-components/about-us-components/about-slider";
import ImageText from "./pages-components/about-us-components/image-text";
import AboutIconBox from "./pages-components/about-us-components/about-icon-box";
function AboutUs (){
    return(
        <>
        <br/>
        <AboutSlider/>
        <FlatTitle/>
        <ImageText/>
        <AboutIconBox/>
        <br/>
        <br/>
        
        </>
    )
}
export default AboutUs;