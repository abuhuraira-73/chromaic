
import React from "react";
import OurStoreDetails from "./pages-components/about-us-components/our-store-details";
import ContactUsMap from "./pages-components/contact-us-components/contact-us-map";
import ContactUsForm from "./pages-components/contact-us-components/contact-us-form";
function ContactUs (){
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>

        {/* <!-- page-title --> */}
        <div class="tf-page-title style-2">
            <div class="container-full">
                <div class="heading text-center">Contact Us</div>
            </div>
        </div>
        {/* <!-- /page-title --> */}
        <ContactUsMap/>
        <ContactUsForm/>

        </>
)
}
export default ContactUs;