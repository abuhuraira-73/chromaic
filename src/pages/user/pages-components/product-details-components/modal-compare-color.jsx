import React from "react";
function ModalCompare(){
    return(
        <>
            {/* <!-- modal compare_color --> */}
    <div class="modal fade modalDemo tf-product-modal modal-part-content" id="compare_color">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="header">
                    <div class="demo-title">Compare color</div>
                    <span class="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div class="tf-compare-color-wrapp">
                    <div class="tf-compare-color-grid">

                        <input type="checkbox" class="sr-only" id="remove-compare-color-beige-1"/>
                        <div class="tf-compare-color-item">
                            <div class="tf-compare-color-top">
                                <label for="remove-compare-color-beige-1" class="tf-compare-color-remove">Remove</label>
                                <img class="lazyload" data-src="/assets/images/shop/products/hmgoepprod2.jpg" src="/assets/images/shop/products/hmgoepprod2.jpg" alt="img-compare"/>
                            </div>
                            <div class="tf-compare-color-bottom">
                                <div class="tf-compare-color-color">
                                    <span class="tf-color-list-color bg-color-beige"></span>
                                    <span>Beige</span>
                                </div>
                                <form class="">
                                    <select class="tf-select" name="id">
                                        <option value="46633906045232" selected="">S - $8.00</option>
                                        <option value="47256262738224">M - $8.00</option>
                                        <option value="47256262770992">L - $8.00</option>
                                        <option value="47256262803760">XL - $8.00</option>
                                    </select>
                                    <a href="javascript:void(0);" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"><span>Add to cart</span></a>
                                </form>
                            </div>
                        </div>

                        <input type="checkbox" class="sr-only" id="remove-compare-color-beige-2"/>
                        <div class="tf-compare-color-item">
                            <div class="tf-compare-color-top">
                                <label for="remove-compare-color-beige-2" class="tf-compare-color-remove">Remove</label>
                                <img class="lazyload" data-src="/assets/images/shop/products/hmgoepprod12.jpg" src="/assets/images/shop/products/hmgoepprod12.jpg" alt=""/>
                            </div>
                            <div class="tf-compare-color-bottom">
                                <div class="tf-compare-color-color">
                                    <span class="tf-color-list-color bg-color-blue"></span>
                                    <span>Blue</span>
                                </div>
                                <form class="">
                                    <select class="tf-select" name="id">
                                        <option value="46633906045232" selected="">S - $8.00</option>
                                        <option value="47256262738224">M - $8.00</option>
                                        <option value="47256262770992">L - $8.00</option>
                                        <option value="47256262803760">XL - $8.00</option>
                                    </select>
                                    <a href="javascript:void(0);" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"><span>Add to cart</span></a>
                                </form>
                            </div>
                        </div>

                        <input type="checkbox" class="sr-only" id="remove-compare-color-beige-3"/>
                        <div class="tf-compare-color-item">
                            <div class="tf-compare-color-top">
                                <label for="remove-compare-color-beige-3" class="tf-compare-color-remove">Remove</label>
                                <img class="lazyload" data-src="/assets/images/shop/products/hmgoepprod7.jpg" src="/assets/images/shop/products/hmgoepprod7.jpg" alt=""/>
                            </div>
                            <div class="tf-compare-color-bottom">
                                <div class="tf-compare-color-color">
                                    <span class="tf-color-list-color bg-color-black"></span>
                                    <span>Black</span>
                                </div>
                                <form class="">
                                    <select class="tf-select" name="id">
                                        <option value="46633906045232" selected="">S - $8.00</option>
                                        <option value="47256262738224">M - $8.00</option>
                                        <option value="47256262770992">L - $8.00</option>
                                        <option value="47256262803760">XL - $8.00</option>
                                    </select>
                                    <a href="javascript:void(0);" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"><span>Add to cart</span></a>
                                </form>
                            </div>
                        </div>

                        <input type="checkbox" class="sr-only" id="remove-compare-color-beige-4"/>
                        <div class="tf-compare-color-item">
                            <div class="tf-compare-color-top">
                                <label for="remove-compare-color-beige-4" class="tf-compare-color-remove">Remove</label>
                                <img class="lazyload" data-src="/assets/images/shop/products/hmgoepprod14.jpg" src="/assets/images/shop/products/hmgoepprod14.jpg" alt=""/>
                            </div>
                            <div class="tf-compare-color-bottom">
                                <div class="tf-compare-color-color">
                                    <span class="tf-color-list-color bg-color-white"></span>
                                    <span>White</span>
                                </div>
                                <form class="">
                                    <select class="tf-select" name="id">
                                        <option value="46633906045232" selected="">S - $8.00</option>
                                        <option value="47256262738224">M - $8.00</option>
                                        <option value="47256262770992">L - $8.00</option>
                                        <option value="47256262803760">XL - $8.00</option>
                                    </select>
                                    <a href="javascript:void(0);" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"><span>Add to cart</span></a>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- /modal compare_color --> */}

        </>
    )
}
export default ModalCompare;