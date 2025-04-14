import React from "react";
function CompareAskDileveryShare() {
    return (
        <>
            <div className="tf-product-info-extra-link">
                <a href="#compare_color" data-bs-toggle="modal" className="tf-product-extra-icon">
                    <div className="icon">
                        <img src="/assets/images/item/compare.svg" alt="" />
                    </div>
                    <div className="text fw-6">Compare color</div>
                </a>
                <a href="#ask_question" data-bs-toggle="modal" className="tf-product-extra-icon">
                    <div className="icon">
                        <i className="icon-question"></i>
                    </div>
                    <div className="text fw-6">Ask a question</div>
                </a>
                <a href="#delivery_return" data-bs-toggle="modal" className="tf-product-extra-icon">
                    <div className="icon">
                        <svg
                            className="d-inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="currentColor"
                        >
                            <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z"></path>
                        </svg>
                    </div>
                    <div className="text fw-6">Delivery & Return</div>
                </a>
                <a href="#share_social" data-bs-toggle="modal" className="tf-product-extra-icon">
                    <div className="icon">
                        <i className="icon-share"></i>
                    </div>
                    <div className="text fw-6">Share</div>
                </a>
            </div>
            <div className="tf-product-info-delivery-return">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="tf-product-delivery">
                            <div className="icon">
                                <i className="icon-delivery-time"></i>
                            </div>
                            <p>
                                Estimate delivery times:{" "}
                                <span className="fw-7">12-26 days</span> (International),{" "}
                                <span className="fw-7">3-6 days</span> (United States).
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="tf-product-delivery mb-0">
                            <div className="icon">
                                <i className="icon-return-order"></i>
                            </div>
                            <p>
                                Return within <span className="fw-7">30 days</span> of purchase.
                                Duties & taxes are non-refundable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tf-product-info-trust-seal">
                <div className="tf-product-trust-mess">
                    <i className="icon-safe"></i>
                    <p className="fw-6">
                        Guarantee Safe <br /> Checkout
                    </p>
                </div>
                <div className="tf-payment">
                    <img src="/assets/images/payments/visa.png" alt="" />
                    <img src="/assets/images/payments/img-1.png" alt="" />
                    <img src="/assets/images/payments/img-2.png" alt="" />
                    <img src="/assets/images/payments/img-3.png" alt="" />
                    <img src="/assets/images/payments/img-4.png" alt="" />
                </div>
            </div>


        </>
    )
}
export default CompareAskDileveryShare;