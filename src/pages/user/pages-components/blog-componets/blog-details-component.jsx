import React from "react";
import RelatedArticles from "./reated-articles";
function BlogDetailsComponent() {
    return (
        <>
            {/* <!-- blog-detail --> */}
            <div class="blog-detail">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="blog-detail-main">
                                <div class="blog-detail-main-heading">
                                    <ul class="tags-lists justify-content-center">
                                        <li>
                                            <a href="#" class="tags-item">ACCESSORIES</a>
                                        </li>
                                        <li>
                                            <a href="#" class="tags-item">BAGS</a>
                                        </li>
                                    </ul>
                                    <div class="title">Something About This Style Of Jeans</div>
                                    <div class="meta">by <span>admin</span> on <span>Oct 02</span></div>
                                    <div class="image">
                                        <img class="lazyload" data-src="/assets/images/blog/blog-detail.jpg" src="/assets/images/blog/blog-detail.jpg" alt="" />
                                    </div>
                                </div>
                                <blockquote>
                                    <div class="icon">
                                        <img src="/assets/images/item/quote.svg" alt="" />
                                    </div>
                                    <div class="text">
                                        Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters,
                                        numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.
                                    </div>
                                </blockquote>
                                <div class="grid-image">
                                    <div>
                                        <img class="lazyload" data-src="/assets/images/blog/blog-detail-1.jpg" src="/assets/images/blog/blog-detail-1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img class="lazyload" data-src="/assets/images/blog/blog-detail-2.jpg" src="/assets/images/blog/blog-detail-2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="desc">
                                    Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus tempus. Etiam feugiat lorem non metus Maecenas vestibulum mollis diam.
                                    Pellentesque auctor neque nec urna. Pellentesque commodo eros a enim. Etiam sit amet orci eget eros faucibus tincidunt. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.In hac
                                    habitasse platea dictumst. Etiam ultricies nisi vel augue. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque rutrum. Duis leo. <br /> <br /> <br />
                                    Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus tempus. Etiam feugiat lorem non metus. Morbi mattis ullamcorper
                                    velit. Donec sodales sagittis magna. Curabitur a felis in nunc fringilla tristique. Quisque malesuada placerat nisl. Phasellus gravida semper nisi. <br /> <br /> <br />
                                    Curabitur blandit mollis lacus. Phasellus nec sem in justo pellentesque facilisis. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce ac felis sit amet ligula pharetra
                                    condimentum. Integer tincidunt. <br /> <br /> <br />
                                    Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Pellentesque commodo eros a enim. Etiam sit amet orci eget eros faucibus tincidunt. Vestibulum purus quam, scelerisque ut, mollis sed,
                                    nonummy id, metus.In hac habitasse platea dictumst. Etiam ultricies nisi vel augue. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque rutrum. Duis leo.
                                </div>
                                <div class="bot d-flex justify-content-between flex-wrap align-items-center">
                                    <ul class="tags-lists">
                                        <li>
                                            <a href="#" class="tags-item"><span>Accessories</span></a>
                                        </li>
                                    </ul>
                                    <div class="d-flex align-items-center gap-20">
                                        <p>Share:</p>
                                        <ul class="tf-social-icon d-flex style-default">
                                            <li><a href="#" class="box-icon round social-facebook border-line-black"><i class="icon fs-14 icon-fb"></i></a></li>
                                            <li><a href="#" class="box-icon round social-twiter border-line-black"><i class="icon fs-12 icon-Icon-x"></i></a></li>
                                            <li><a href="#" class="box-icon round social-instagram border-line-black"><i class="icon fs-14 icon-instagram"></i></a></li>
                                            <li><a href="#" class="box-icon round social-tiktok border-line-black"><i class="icon fs-14 icon-tiktok"></i></a></li>
                                            <li><a href="#" class="box-icon round social-pinterest border-line-black"><i class="icon fs-14 icon-pinterest-1"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tf-article-navigation">
                                    <div class="item position-relative d-flex w-100 prev">
                                        <a href="#" class="icon">
                                            <i class="icon-arrow-left"></i>
                                        </a>
                                        <div class="inner">
                                            <a href="#">PREVIOUS</a>
                                            <h6>
                                                <a href="#">Fashionista editors reveal their designer</a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="item position-relative d-flex w-100 justify-content-end next">
                                        <div class="inner text-end">
                                            <a href="#">NEXT</a>
                                            <h6>
                                                <a href="#">The next generation of leather alternatives</a>
                                            </h6>
                                        </div>
                                        <a href="#" class="icon">
                                            <i class="icon-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-sidebar-mobile d-flex">
                <button data-bs-toggle="offcanvas" data-bs-target="#sidebarmobile" aria-controls="offcanvasRight"><i class="icon-open"></i></button>
            </div>
            {/* <!-- /blog-detail --> */}

            
            <RelatedArticles/>



        </>
    )
}
export default BlogDetailsComponent;