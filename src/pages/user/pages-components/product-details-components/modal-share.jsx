import React from "react";
function ModalShare(){
    return(
        <>
            {/* <!-- modal share social --> */}
    <div class="modal modalCentered fade modalDemo tf-product-modal modal-part-content" id="share_social">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="header">
                    <div class="demo-title">Share</div>
                    <span class="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div class="overflow-y-auto">
                    <ul class="tf-social-icon d-flex gap-10">
                        <li><a href="#" class="box-icon social-facebook bg_line"><i class="icon icon-fb"></i></a></li>
                        <li><a href="#" class="box-icon social-twiter bg_line"><i class="icon icon-Icon-x"></i></a></li>
                        <li><a href="#" class="box-icon social-instagram bg_line"><i class="icon icon-instagram"></i></a></li>
                        <li><a href="#" class="box-icon social-tiktok bg_line"><i class="icon icon-tiktok"></i></a></li>
                        <li><a href="#" class="box-icon social-pinterest bg_line"><i class="icon icon-pinterest-1"></i></a></li>
                    </ul>
                    <form class="form-share"  method="post" accept-charset="utf-8">
                        <fieldset>
                            <input type="text" value="https://themesflat.co/html/ecomus/" tabindex="0" aria-required="true"/>
                        </fieldset>
                        <div class="button-submit">
                            <button class="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn" type="button">Copy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- /modal share social --> */}

        </>
    )
}
export default ModalShare;