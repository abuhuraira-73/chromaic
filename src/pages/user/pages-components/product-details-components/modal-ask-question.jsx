import React from "react";
function ModalAskQuetion(){
    return(
        <>
            {/* <!-- modal ask_question --> */}
    <div class="modal modalCentered fade modalDemo tf-product-modal modal-part-content" id="ask_question">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="header">
                    <div class="demo-title">Ask a question</div>
                    <span class="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div class="overflow-y-auto">
                    <form class="">
                        <fieldset class="">
                            <label for="">Name *</label>
                            <input type="text" placeholder="" class="" name="text" tabindex="2" value=""
                                aria-required="true" required=""/>
                        </fieldset>
                        <fieldset class="">
                            <label for="">Email *</label>
                            <input type="email" placeholder="" class="" name="text" tabindex="2" value=""
                                aria-required="true" required=""/>
                        </fieldset>
                        <fieldset class="">
                            <label for="">Phone number</label>
                            <input type="number" placeholder="" class="" name="text" tabindex="2" value=""
                                aria-required="true" required=""/>
                        </fieldset>
                        <fieldset class="">
                            <label for="">Message</label>
                            <textarea name="message" rows="4" placeholder="" class="" tabindex="2" aria-required="true"
                                required=""></textarea>
                        </fieldset>
                        <button type="submit"
                            class="tf-btn w-100 btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"><span>Send</span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- /modal ask_question --> */}

        </>
    )
}
export default ModalAskQuetion;