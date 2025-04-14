import React from "react";
function AboutIconBox(){
    return(
        <>
                {/* <!-- iconbox --> */}
        <section>
            <div class="container">
                <div class="bg_grey-2 radius-10 flat-wrap-iconbox">
                    <div class="flat-title lg">
                        <span class="title fw-5">Quality is our priority</span>
                        <div>
                            <p class="sub-title text_black-2">Our talented stylists have put together outfits that are perfect for the season.</p> 
                            <p class="sub-title text_black-2">They've variety of ways to inspire your next fashion-forward look.</p>
                        </div>
                    </div>
                    <div class="flat-iconbox-v3 lg">
                        <div class="wrap-carousel wrap-mobile">
                            <div dir="ltr" class="swiper tf-sw-mobile" data-preview="1" data-space="15">
                                <div class="swiper-wrapper wrap-iconbox lg">
                                    <div class="swiper-slide">
                                        <div class="tf-icon-box text-center">
                                            <div class="icon">
                                                <i class="icon-materials"></i>
                                            </div>
                                            <div class="content">
                                                <div class="title">High-Quality Materials</div>
                                                <p class="text_black-2">Crafted with precision and excellence, our activewear is meticulously engineered using premium materials to ensure unmatched comfort and durability.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="tf-icon-box text-center">
                                            <div class="icon">
                                                <i class="icon-design"></i>
                                            </div>
                                            <div class="content">
                                                <div class="title">Laconic Design</div>
                                                <p class="text_black-2">Simplicity refined. Our activewear embodies the essence of minimalistic design, delivering effortless style that speaks volumes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="tf-icon-box text-center">
                                            <div class="icon">
                                                <i class="icon-sizes"></i>
                                            </div>
                                            <div class="content">
                                                <div class="title">Various Sizes</div>
                                                <p class="text_black-2">Designed for every body and anyone, our activewear embraces diversity with a wide range of sizes and shapes, celebrating the beauty of individuality.</p>
                                            </div>
                                        </div>
                                    </div>
                               
                                </div>
                            </div>
                            <div class="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- /iconbox --> */}

        </>
    )
}
export default AboutIconBox;;