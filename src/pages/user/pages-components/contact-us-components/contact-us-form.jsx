
import React from "react";
function ContactUsForm (){
    return(
        <>
                {/* <!-- form --> */}
        <section class="bg_grey-7 flat-spacing-9">
            <div class="container">
                <div class="flat-title">
                    <span class="title">Get in Touch</span>
                    <p class="sub-title text_black-2">If you’ve got great products your making or looking to work with us then drop us a line.</p>
                </div>
                <div>
                    <form class="mw-705 mx-auto text-center form-contact" id="contactform" action="https://themesflat.co/html/ecomus/contact/contact-process.php" method="post">
                        <div class="d-flex gap-15 mb_15">
                            <fieldset class="w-100">
                                <input type="text" name="name" id="name" required placeholder="Name *"/>
                            </fieldset>
                            <fieldset class="w-100">
                                <input type="email" name="email" id="email" required placeholder="Email *"/>
                            </fieldset>
                        </div>
                        <div class="mb_15">
                            <textarea placeholder="Message" name="message" id="message" required cols="30" rows="10"></textarea>
                        </div>
                        <div class="send-wrap">
                            <button type="submit" class="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/* <!-- /form --> */}


        </>
)
}
export default ContactUsForm;