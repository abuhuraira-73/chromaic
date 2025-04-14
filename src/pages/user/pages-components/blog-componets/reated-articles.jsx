import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RelatedArticles() {
    useEffect(() => {
        new Swiper(".swiper.tf-sw-recent", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".nav-prev-recent",
                prevEl: ".nav-next-recent",
            },
            pagination: {
                el: ".sw-pagination-recent",
                clickable: true,
            },
            breakpoints: {
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
            },
        });
    }, []);

    return (
        <>
            {/* Related Articles */}
            <section className="mb_30">
                <div className="container">
                    <div className="flat-title">
                        <h5>Related Articles</h5>
                    </div>
                    <div className="hover-sw-nav view-default hover-sw-5">
                        <div dir="ltr" className="swiper tf-sw-recent">
                            <div className="swiper-wrapper">
                                {[
                                    { img: "blog-1.jpg", title: "Pop-punk is back in fashion" },
                                    { img: "blog-2.jpg", title: "The next generation of leather alternatives" },
                                    { img: "blog-3.jpg", title: "An Exclusive Clothing Collaboration" },
                                    { img: "blog-4.jpg", title: "The next generation of leather alternatives" },
                                    { img: "blog-5.jpg", title: "The next generation of leather alternatives" },
                                    { img: "blog-6.jpg", title: "The next generation of leather alternatives" },
                                ].map((article, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="blog-article-item">
                                            <div className="article-thumb radius-10">
                                                <a href="blog-detail.html">
                                                    <img src={`/assets/images/blog/${article.img}`} alt="img-blog" />
                                                </a>
                                                <div className="article-label">
                                                    <a href="shop-collection-list.html" className="tf-btn style-2 btn-fill radius-3 animate-hover-btn">Shop collection</a>
                                                </div>
                                            </div>
                                            <div className="article-content">
                                                <div className="article-title">
                                                    <a href="blog-detail.html">{article.title}</a>
                                                </div>
                                                <div className="article-btn">
                                                    <a href="blog-detail.html" className="tf-btn btn-line fw-6">
                                                        Read more<i className="icon icon-arrow1-top-left"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round">
                            <span className="icon icon-arrow-left"></span>
                        </div>
                        <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round">
                            <span className="icon icon-arrow-right"></span>
                        </div>
                        <div className="sw-dots d-flex style-2 sw-pagination-recent justify-content-center"></div>
                    </div>
                </div>
            </section>
            {/* /Related Articles */}
        </>
    );
}

export default RelatedArticles;
