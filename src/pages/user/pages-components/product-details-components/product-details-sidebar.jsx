import React from "react";
function ProductSidebar(){
    return(
        <>
            {/* <!-- sidebar--> */}
    <div class="offcanvas offcanvas-start canvas-filter canvas-sidebar" id="sidebarmobile">
        <div class="canvas-wrapper">
            <header class="canvas-header">
                <span class="title">SIDEBAR PRODUCT</span>
                <span class="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
            </header>
            <div class="canvas-body">
                <aside class="tf-shop-sidebar">
                    <div class="widget-facet">
                        <div class="facet-title" data-bs-target="#shipping" data-bs-toggle="collapse" aria-expanded="true" aria-controls="shipping">
                            <span>Shipping &amp; Delivery</span>
                            <span class="icon icon-arrow-up"></span>
                        </div>
                        <div id="shipping" class="collapse show">
                            <ul class="widget-iconbox-list mb_36">
                                <li class="iconbox-item">
                                    <div class="box-icon w_50 round">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H15.5C16.0523 0 16.5 0.447715 16.5 1V3.5H19.7857C20.099 3.5 20.3943 3.64687 20.5833 3.89679L23.7976 8.14679C23.9289 8.32046 24 8.53225 24 8.75V13C24 13.5523 23.5523 14 23 14H20.3293C19.9174 15.1652 18.8062 16 17.5 16C16.1938 16 15.0826 15.1652 14.6707 14H8.82929C8.41745 15.1652 7.3062 16 6 16C4.69378 16 3.58255 15.1652 3.17071 14H1C0.447715 14 0 13.5523 0 13V1ZM3.17071 12C3.58255 10.8348 4.69378 10 6 10C7.3062 10 8.41745 10.8348 8.82929 12H14.5V2H2V12H3.17071ZM16.5 10.1707V5.5H19.2882L22 9.08557V12H20.3293C19.9174 10.8348 18.8062 10 17.5 10C17.1494 10 16.8128 10.0602 16.5 10.1707ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14C6.55227 14 7 13.5523 7 13C7 12.4477 6.55227 12 6 12ZM17.5 12C16.9477 12 16.5 12.4477 16.5 13C16.5 13.5523 16.9477 14 17.5 14C18.0523 14 18.5 13.5523 18.5 13C18.5 12.4477 18.0523 12 17.5 12Z" fill="black"></path>
                                        </svg>
                                    </div>
                                    <div class="iconbox-content">
                                        <h4 class="iconbox-title">Free shipping</h4>
                                        <p class="iconbox-desc">Free iconbox for all US order</p>
                                    </div>
                                </li>
                                <li class="iconbox-item">
                                    <div class="box-icon w_50 round">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.9074 23.9572C13.9179 23.9561 12.9418 23.7273 12.0548 23.2887C9.58879 22.0801 7.33175 20.4851 5.36912 18.5641C3.44812 16.6015 1.85314 14.3444 0.644541 11.8784C0.0604334 10.6753 -0.133278 9.31981 0.0904706 8.0013C0.314219 6.68278 0.94425 5.46709 1.89254 4.52406L3.43026 2.98635C3.79573 2.62231 4.29056 2.41791 4.8064 2.41791C5.32225 2.41791 5.81707 2.62231 6.18255 2.98635L8.47798 5.29292C8.80356 5.62725 8.99924 6.06673 9.02988 6.5324C9.06052 6.99806 8.92409 7.45939 8.64512 7.83349L7.53084 9.3935C8.04739 11.0793 8.9739 12.6107 10.2274 13.8506C11.4467 15.0497 12.9375 15.9366 14.5731 16.4358L16.1331 15.3215C16.5094 15.041 16.9738 14.9047 17.4421 14.9374C17.9103 14.9701 18.3512 15.1696 18.6849 15.4998L20.9803 17.7952C21.3443 18.1607 21.5487 18.6555 21.5487 19.1714C21.5487 19.6872 21.3443 20.182 20.9803 20.5475L19.4426 22.0852C18.8467 22.6799 18.1394 23.1513 17.3613 23.4725C16.5831 23.7937 15.7493 23.9584 14.9074 23.9572ZM4.81197 4.08949C4.77414 4.08932 4.7367 4.09717 4.70212 4.11254C4.66755 4.1279 4.63663 4.15043 4.6114 4.17863L3.07369 5.70521C2.36974 6.40573 1.90384 7.30983 1.74187 8.28965C1.5799 9.26947 1.73006 10.2754 2.17111 11.1652C3.32229 13.4583 4.82631 15.5564 6.62826 17.3829C8.45481 19.1849 10.5529 20.6889 12.846 21.8401C13.7358 22.2811 14.7417 22.4313 15.7215 22.2693C16.7014 22.1074 17.6055 21.6415 18.306 20.9375L19.788 19.3552C19.8146 19.3302 19.8359 19.3 19.8504 19.2665C19.8649 19.2329 19.8724 19.1968 19.8724 19.1602C19.8724 19.1237 19.8649 19.0875 19.8504 19.054C19.8359 19.0204 19.8146 18.9902 19.788 18.9652L17.5594 16.6698C17.5086 16.6251 17.4432 16.6005 17.3756 16.6005C17.3079 16.6005 17.2425 16.6251 17.1917 16.6698L15.3197 18.0849C15.2278 18.1524 15.123 18.2002 15.0117 18.2251C14.9005 18.25 14.7853 18.2516 14.6734 18.2298C12.5479 17.7079 10.6152 16.5908 9.10198 15.0095C7.46364 13.4857 6.30245 11.5194 5.75912 9.34893C5.73795 9.23701 5.73988 9.12196 5.76479 9.01082C5.7897 8.89968 5.83707 8.79481 5.90398 8.70264L7.31912 6.83064C7.36378 6.7798 7.38841 6.71445 7.38841 6.64678C7.38841 6.57911 7.36378 6.51376 7.31912 6.46292L5.0014 4.17863C4.97837 4.15071 4.94944 4.12824 4.91668 4.11282C4.88393 4.09741 4.84817 4.08944 4.81197 4.08949ZM22.8857 14.2072C23.611 12.833 23.9933 11.3039 24 9.75007C24 8.46686 23.7467 7.19627 23.2546 6.01116C22.7626 4.82605 22.0414 3.74973 21.1325 2.84392C20.2236 1.93811 19.1448 1.22063 17.958 0.732616C16.7712 0.244602 15.4998 -0.00434226 14.2166 5.73114e-05C12.6627 0.00678991 11.1336 0.389078 9.75941 1.11434C9.57002 1.2205 9.42792 1.39451 9.36175 1.60129C9.29558 1.80807 9.31026 2.03225 9.40284 2.22863C9.50889 2.41806 9.68365 2.55953 9.89102 2.62381C10.0984 2.6881 10.3225 2.67029 10.5171 2.57406C11.6525 1.98346 12.9144 1.67754 14.1943 1.68263C16.3379 1.67967 18.395 2.52761 19.9139 4.04023C21.4328 5.55285 22.2892 7.60647 22.2951 9.75007C22.3002 11.0299 21.9943 12.2918 21.4037 13.4272C21.3075 13.6218 21.2897 13.846 21.354 14.0533C21.4182 14.2607 21.5597 14.4354 21.7491 14.5415C21.8713 14.5986 22.0043 14.629 22.1391 14.6306C22.2898 14.6318 22.4381 14.5933 22.5692 14.519C22.7002 14.4447 22.8094 14.3371 22.8857 14.2072ZM16.4451 11.9786C16.5822 11.8254 16.6579 11.6271 16.6579 11.4215C16.6579 11.2159 16.5822 11.0176 16.4451 10.8644L15.0523 9.40464V6.40721C15.0523 6.18556 14.9642 5.97299 14.8075 5.81627C14.6508 5.65954 14.4382 5.57149 14.2166 5.57149C13.9949 5.57149 13.7823 5.65954 13.6256 5.81627C13.4689 5.97299 13.3808 6.18556 13.3808 6.40721V9.75007C13.381 9.97164 13.4692 10.1841 13.626 10.3406L15.3308 11.9786C15.4841 12.1157 15.6824 12.1915 15.888 12.1915C16.0936 12.1915 16.2919 12.1157 16.4451 11.9786Z" fill="black"></path>
                                        </svg>
                                    </div>
                                    <div class="iconbox-content">
                                        <h4 class="iconbox-title">Premium Support</h4>
                                        <p class="iconbox-desc">Support 24 hours a day</p>
                                    </div>
                                </li>
                                <li class="iconbox-item">
                                    <div class="box-icon w_50 round">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M24 12C24 18.6173 18.6173 24 12 24C5.3827 24 0 18.6173 0 12C0 11.778 0.0882058 11.565 0.245213 11.408C0.40222 11.251 0.615168 11.1628 0.837209 11.1628C1.05925 11.1628 1.2722 11.251 1.42921 11.408C1.58621 11.565 1.67442 11.778 1.67442 12C1.67442 17.693 6.30698 22.3256 12 22.3256C17.693 22.3256 22.3256 17.693 22.3256 12C22.3256 6.30698 17.693 1.67442 12 1.67442C9.32224 1.68284 6.75254 2.73153 4.83349 4.59907H7.44558C7.66762 4.59907 7.88057 4.68728 8.03758 4.84428C8.19458 5.00129 8.28279 5.21424 8.28279 5.43628C8.28279 5.65832 8.19458 5.87127 8.03758 6.02828C7.88057 6.18528 7.66762 6.27349 7.44558 6.27349H2.98047C2.75842 6.27349 2.54548 6.18528 2.38847 6.02828C2.23146 5.87127 2.14326 5.65832 2.14326 5.43628V0.971163C2.14326 0.749121 2.23146 0.536174 2.38847 0.379166C2.54548 0.222159 2.75842 0.133953 2.98047 0.133953C3.20251 0.133953 3.41545 0.222159 3.57246 0.379166C3.72947 0.536174 3.81767 0.749121 3.81767 0.971163V3.27516C6.01451 1.20893 8.93247 0 12 0C18.6173 0 24 5.3827 24 12ZM12 5.02326C11.778 5.02326 11.565 5.11146 11.408 5.26847C11.251 5.42548 11.1628 5.63842 11.1628 5.86047V6.70437C10.6777 6.71712 10.2038 6.85211 9.78477 7.09685C9.36579 7.34158 9.01537 7.68813 8.76601 8.10437C8.51664 8.52061 8.3764 8.99307 8.35827 9.47795C8.34015 9.96283 8.44473 10.4444 8.66233 10.8781C9.00614 11.568 9.6 12.0837 10.3323 12.3271L13.1375 13.2625C13.4456 13.3641 13.6956 13.5807 13.8407 13.8709C13.9859 14.1611 14.0082 14.4904 13.9055 14.7974C13.8254 15.0393 13.6711 15.2498 13.4644 15.3989C13.2578 15.548 13.0094 15.6281 12.7546 15.6279H11.5312C11.193 15.6282 10.8632 15.5219 10.5889 15.3242C10.3146 15.1264 10.1095 14.8471 10.003 14.5261C9.96816 14.4218 9.91313 14.3253 9.84102 14.2422C9.76891 14.1591 9.68114 14.091 9.58272 14.0418C9.4843 13.9926 9.37716 13.9633 9.2674 13.9555C9.15765 13.9477 9.04744 13.9616 8.94307 13.9965C8.8387 14.0313 8.7422 14.0863 8.6591 14.1584C8.57599 14.2305 8.5079 14.3183 8.45872 14.4167C8.40953 14.5151 8.38022 14.6223 8.37244 14.732C8.36466 14.8418 8.37858 14.952 8.4134 15.0564C8.6122 15.6496 8.97661 16.1736 9.46359 16.5664C9.95057 16.9593 10.5398 17.2045 11.1617 17.2733V18.1395C11.1617 18.3616 11.2499 18.5745 11.4069 18.7315C11.5639 18.8885 11.7768 18.9767 11.9989 18.9767C12.2209 18.9767 12.4339 18.8885 12.5909 18.7315C12.7479 18.5745 12.8361 18.3616 12.8361 18.1395V17.2956C13.321 17.2828 13.7948 17.1478 14.2137 16.9031C14.6325 16.6584 14.9828 16.312 15.2322 15.8959C15.4815 15.4799 15.6218 15.0076 15.64 14.5229C15.6583 14.0381 15.5539 13.5566 15.3366 13.123C15.168 12.7829 14.9336 12.4798 14.6469 12.231C14.3602 11.9823 14.027 11.793 13.6666 11.674L10.8614 10.7386C10.5533 10.6359 10.3033 10.4193 10.1581 10.1291C10.013 9.83888 9.9907 9.5107 10.0934 9.20261C10.1735 8.96071 10.3278 8.75022 10.5344 8.60111C10.7411 8.45201 10.9895 8.37186 11.2443 8.37209H12.4666C13.1609 8.37209 13.776 8.81526 13.9959 9.47386C14.0662 9.68465 14.2174 9.85888 14.4162 9.95821C14.6149 10.0575 14.845 10.0738 15.0558 10.0035C15.2666 9.93322 15.4408 9.78205 15.5402 9.58328C15.6395 9.38451 15.6558 9.15442 15.5855 8.94363C15.3866 8.35022 15.022 7.82614 14.5348 7.43329C14.0476 7.04045 13.4582 6.79526 12.8361 6.7267V5.86047C12.8361 5.63842 12.7479 5.42548 12.5909 5.26847C12.4339 5.11146 12.2209 5.02326 11.9989 5.02326H12Z" fill="black"></path>
                                        </svg>
                                    </div>
                                    <div class="iconbox-content">
                                        <h4 class="iconbox-title">30 Days Return</h4>
                                        <p class="iconbox-desc">You have 30 days to return</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget-facet">
                        <div class="facet-title" data-bs-target="#sale-products" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sale-products">
                            <span>Sale products</span>
                            <span class="icon icon-arrow-up"></span>
                        </div>
                        <div id="sale-products" class="collapse show">
                            <div class="widget-featured-products mb_36">
                                <div class="featured-product-item">
                                    <a href="product-detail.html" class="card-product-wrapper">
                                        <img class="img-product lazyload" data-src="/assets/images/products/img-feature-1.png" alt="image-feature" src="/assets/images/products/img-feature-1.png"/>
                                    </a>
                                    <div class="card-product-info">
                                        <a href="#" class="title link">Jersey thong body</a>
                                        <span class="price">$105.95</span>
                                    </div>
                                </div>
                                <div class="featured-product-item">
                                    <a href="product-detail.html" class="card-product-wrapper">
                                        <img class="img-product lazyload" data-src="/assets/images/products/img-feature-2.png" alt="image-feature" src="/assets/images/products/img-feature-2.png"/>
                                    </a>
                                    <div class="card-product-info">
                                        <a href="#" class="title link">Lace-trimmed Satin Camisole Top</a>
                                        <span class="price">€24,95</span>
                                    </div>
                                </div>
                                <div class="featured-product-item">
                                    <a href="product-detail.html" class="card-product-wrapper">
                                        <img class="img-product lazyload" data-src="/assets/images/products/img-feature-3.png" alt="image-feature" src="/assets/images/products/img-feature-3.png"/>
                                    </a>
                                    <div class="card-product-info">
                                        <a href="#" class="title link">Linen-blend Tank Top</a>
                                        <span class="price">$16.95</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-facet">
                        <div class="facet-title" data-bs-target="#gallery" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gallery">
                            <span>Gallery</span>
                            <span class="icon icon-arrow-up"></span>
                        </div>
                        <div id="gallery" class="collapse show">
                            <div class="grid-3 gap-4 mb_36">
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-1.jpg" alt="img-gallery" src="/assets/images/shop/gallery/gallery-1.jpg"/>
                                </a>
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-2.jpg" alt="img-gallery" src="/assets/images/shop/gallery/gallery-2.jpg"/>
                                </a>
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-3.jpg" src="/assets/images/shop/gallery/gallery-3.jpg" alt="img-gallery"/>
                                </a>
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-4.jpg" alt="img-gallery" src="/assets/images/shop/gallery/gallery-4.jpg"/>
                                </a>
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-5.jpg" src="/assets/images/shop/gallery/gallery-5.jpg" alt="img-gallery"/>
                                </a>
                                <a href="product-detail.html" class="item-gallery">
                                    <img class="lazyload" data-src="/assets/images/shop/gallery/gallery-6.jpg" src="/assets/images/shop/gallery/gallery-6.jpg" alt="img-gallery"/>
                                </a>
            
                            </div>
                        </div>
                    </div>
                    <div class="widget-facet">
                        <div class="facet-title" data-bs-target="#follow" data-bs-toggle="collapse" aria-expanded="true" aria-controls="follow">
                            <span>Follow us</span>
                            <span class="icon icon-arrow-up"></span>
                        </div>
                        <div id="follow" class="collapse show">
                            <ul class="tf-social-icon d-flex gap-10">
                                <li><a href="#" class="box-icon w_34 round bg_line social-facebook"><i class="icon fs-14 icon-fb"></i></a></li>
                                <li><a href="#" class="box-icon w_34 round bg_line social-twiter"><i class="icon fs-12 icon-Icon-x"></i></a></li>
                                <li><a href="#" class="box-icon w_34 round bg_line social-instagram"><i class="icon fs-14 icon-instagram"></i></a></li>
                                <li><a href="#" class="box-icon w_34 round bg_line social-tiktok"><i class="icon fs-14 icon-tiktok"></i></a></li>
                                <li><a href="#" class="box-icon w_34 round bg_line social-pinterest"><i class="icon fs-14 icon-pinterest-1"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>       
    </div>

        </>
    )
}
export default ProductSidebar;