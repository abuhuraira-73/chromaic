import React from "react";
import BlogContent from "./pages-components/blog-componets/blog-content";
function BlogGrid() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {/* <!-- page-title --> */}
            <div class="tf-page-title">
                <div class="container-full">
                    <div class="row">
                        <div class="col-12">
                            <div class="heading text-center">Blog Grid</div>
                            <ul class="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <a href="index-2.html">Home</a>
                                </li>
                                <li>
                                    <i class="icon-arrow-right"></i>
                                </li>
                                <li>
                                    Fashion
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /page-title --> */}
            <BlogContent/>

        </>
    )
}
export default BlogGrid;